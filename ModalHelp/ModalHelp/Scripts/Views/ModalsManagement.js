
// Muestra las vistas de cada modulo
function DesplegarModulo(id) {
    var contenido = $("#contenido_desplegable_" + id);
    var simbolo = $("#simbolo_desplegable_" + id);
    if (simbolo.hasClass("fa-plus")) {
        simbolo.removeClass("fa-plus").addClass("fa-minus");
        contenido.show();
    }
    else {
        simbolo.removeClass("fa-minus").addClass("fa-plus");
        contenido.hide();
    }
}

// Abre el modal para editar la ventana de ayuda de una vista concreta
function OpenModalHelp(vista) {
    $("#modalAyuda").modal();
}

// Crea un modulo/vista y su respectiva fila en la tabla. 1 = Modulo, 2 = Vista
function CrearElemento(id) {
    var name;
    var alertVoidName;
    var modal;
    var tabla;
    var nameField;
    var url;
    var data;
    switch (id) {
        case 1: // Crear modulo
            name = $("#nombreNuevoModulo").val();
            alertVoidName = $("#alertModuleVoidName");
            modal = $("#modalNuevoModulo");
            tabla = $("#tablaModulos");
            nameField = $("#nombreNuevoModulo");

            url = "/ModalsManagement/CreateModule";
            data = {
                name: name
            }
            break;
        case 2: // Crear vista
            var idModulo = $("#idSelectedElement").val();
            name = $("#nombreNuevaVista").val();
            alertVoidName = $("#alertViewVoidName");
            modal = $("#modalNuevaVista");
            tabla = $("#tablaVistasModulo_" + idModulo);
            nameField = $("#nombreNuevaVista");

            url = "/ModalsManagement/CreateView";
            data = {
                name: name,
                idModule: parseInt(idModulo)
            }
            break;
    }
    if (name.length == 0) {
        alertVoidName.show();
    }
    else {
        postData(url, data)
            .then(data => {
                if (data.Successful) {
                    var datos = data.Data;
                    var newRow;
                    var callSetSetected = "SetSelectedElement(" + datos.Id + ", '" + datos.Name + "'";
                    switch (id) {
                        case 1:
                            newRow = '\
                                <div class="fila_modulo_' + datos.Id + '" label-grid="row" tgcolumns="row">\
                                    <div class="alingVcenter alingHcenter">\
                                        <a class="desplegar" style="cursor: pointer;" title="Desplegar" onclick="DesplegarModulo(' + datos.Id + ')">\
                                            <i id="simbolo_desplegable_' + datos.Id + '" class="fas fa-plus"></i>\
                                        </a >\
                                    </div >\
                                    <div class="alingVcenter">\
                                        ' + datos.Name+ '\
                                    </div>\
                                    <div class="alingVcenter">\
                                 </div>\
                                    <div class="alingVcenter">\
                                        <i class="fas fa-times" href="#" data-toggle="modal" style="cursor:pointer;" data-target="#modalBorrarModulo" title="Eliminar Módulo" onclick="SetSelectedElement(' + datos.Id + ', "' + datos.Name + '", 1)"></i>\
                                    </div>\
                                </div>\
                                <div id="contenido_desplegable_' + datos.Id + '" class="sangria fila_modulo_' + datos.Id + ' pb-2" style="display: none">\
                                    <div id="tablaVistasModulo_' + datos.Id + '" class="tg-grid" name="table">\
                                        <div label-grid="header" tgcolumns="header">\
                                            <div class="alingVcenter alingHcenter">\
                                                <i class="fas fa-plus-square fa-lg" href="#" data-toggle="modal" style="cursor:pointer;" data-target="#modalNuevaVista" title="Crear Vista" onclick="' + callSetSetected + ', 1)"></i>\
                                            </div>\
                                            <div class="alingVcenter">\
                                                Vistas\
                                            </div>\
                                        </div>\
                                        @foreach (var item in Model.Views)\
                                        {\
                                            { Html.RenderAction("View", "ModalsManagement", new { view = item }); }\
                                        }\
                                    </div >\
                                </div >\
                                <div class="fila_modulo_' + datos.Id + '"></div> \
                            ';
                            break
                        case 2:
                            newRow = '\
                            <div class="fila_vista_' + datos.Id + ' view" label-grid="row" tgcolumns="row">\
                                <div></div>\
                                <div class="alingVcenter">\
                                    ' + datos.Name + '\
                                </div>\
                                <div class="alingVcenter">\
                                    <i class="fas fa-file-alt" href="#" data-toggle="modal" style="cursor:pointer;" data-target="#modalAyuda" title="Editar Modal Ayuda" onclick="AbrirModalInfo(' + datos.Id + '); ' + callSetSetected + ', 2); FocusInputModal(3);"></i>\
                                    <input id="bodyModal_' + datos.Id + '" value="" hidden />\
                                </div>\
                                <div class="alingVcenter">\
                                    <i class="fas fa-times" href="#" data-toggle="modal" style="cursor:pointer;" data-target="#modalBorrarVista" title="Eliminar Vista" onclick="' + callSetSetected + ', 2)"></i>\
                                </div>\
                            </div >\
                            ';
                            break
                    }
                    
                    tabla.append(newRow);
                    nameField.val("");
                    alertVoidName.hide();

                } else {

                    alert("Error\n"+data.Text);
                    //Código que se ejecuta si el procedimiento ha fallado.

                }
            })
            .catch(error => {

                alert("Error Ajax\n" + error);
                //Código que se ejecuta si la conexión con el servidor y el procedimiento han fallado.

            });
    }
}

// Borra un elemento. 1 = Modulo, 2 = Vista
function BorrarElemento(id) {
    var url;
    var idElem = $("#idSelectedElement").val();
    var data = {
        id: parseInt(idElem)
    };
    switch (id) {
        case 1:
            modal = $("#modalBorrarModulo");
            url = "/ModalsManagement/DeleteModule";
            
            postData(url, data)
                .then(data => {
                    if (data.Successful) {
                        var clase = "fila_modulo_" + idElem;
                        var filas = document.getElementsByClassName(clase);
                        for (var i = 0; i < filas.length; i++) {
                            $("." + clase).remove();
                        }

                    } else {

                        alert("Error");
                        //Código que se ejecuta si el procedimiento ha fallado.

                    }
                })
                .catch(error => {

                    alert("Error Ajax");
                    //Código que se ejecuta si la conexión con el servidor y el procedimiento han fallado.

                });
            break;
        case 2:
            modal = $("#modalBorrarModulo");
            url = "/ModalsManagement/DeleteView";
            postData(url, data)
                .then(data => {
                    if (data.Successful) {
                        var clase = "fila_vista_" + idElem;
                        var filas = document.getElementsByClassName(clase);
                        for (var i = 0; i < filas.length; i++) {
                            $("." + clase).remove();
                        }

                    } else {

                        alert("Error");
                        //Código que se ejecuta si el procedimiento ha fallado.

                    }
                })
                .catch(error => {

                    alert("Error Ajax");
                    //Código que se ejecuta si la conexión con el servidor y el procedimiento han fallado.

                });
            break;
    }
}

// Indica el id del modulo/vista seleccionado al abrir un modal y establece el nombre del elemento en el modal correspondiente
function SetSelectedElement(id, nombre, cual) {
    $("#idSelectedElement").val(id);

    // Nombre del elemento en el modal correspondiente
    switch (cual) {
        case 1:
            $("#nombreModuloEliminar").html(nombre);
            break;
        case 2:
            $("#nombreVistaEliminar").html(nombre);
            $("#nombreVistaInfo").html(nombre);
            break;
    }
}

// Selecciona el input para poder escribir sin clicar en el
function FocusInputModal(cual) {
    var modal;
    var input;
    switch (cual) {
        case 1:
            modal = $("#modalNuevoModulo");
            input = "#nombreNuevoModulo";
            break;
        case 2:
            modal = $("#modalNuevaVista");
            input = "#nombreNuevaVista";
            break;
    }
    modal.on('shown.bs.modal', function () {
        $(this).find(input).focus();
    });
}

function EditarModal(idView) {
    $("#IdView").val(idView);
    $("#EditModal").submit();
}

// Guarda el texto que ira en un modal de ayuda
function GuardarInfoModal() {
    var idView = $("#idSelectedElement").val();
    var body = $("#cuerpoModal").val();
    var url = "/ModalsManagement/SaveHelpModalInfo";
    var data = {
        idView: parseInt(idView),
        body: body
    };
    postData(url, data)
        .then(data => {
            if (data.Successful) {

                $("#bodyModal_" + idView).val(body);
                alert("La información del modal de ayuda de la vista " + $("#nombreVistaInfo").html() + " se ha guardado correctamente.");

            } else {

                alert("Error");
                //Código que se ejecuta si el procedimiento ha fallado.

            }
        })
        .catch(error => {

            alert("Error Ajax");
            //Código que se ejecuta si la conexión con el servidor y el procedimiento han fallado.

        });
}