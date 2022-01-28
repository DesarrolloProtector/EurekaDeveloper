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
            var idModulo = $("#idSelectedModule").val();
            name = $("#nombreNuevaVista").val();
            alertVoidName = $("#alertViewVoidName");
            modal = $("#modalNuevaVista");
            tabla = $("#tablaVistasModulo_" + idModulo);
            nameField = $("#nombreNuevoModulo");

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
                    switch (id) {
                        case 1:
                            newRow = '\
                                <div label-grid="row" tgcolumns = "row" >\
                                    <div class="alingVcenter alingHcenter">\
                                        <a class="desplegar" style="cursor: pointer; " title="Desplegar" onclick="DesplegarModulo(' + datos.Id + ')">\
                                            <i id="simbolo_desplegable_' + datos.Id + '" class="fas fa-plus"></i>\
                                        </a>\
                                    </div >\
                                    <div class="alingVcenter">\
                                        ' + datos.Name + '\
                                    </div>\
                                    <div class="alingVcenter">\
                                    </div>\
                                    <div class="alingVcenter">\
                                        <i class="fas fa-times"></i>\
                                    </div>\
                                </div >\
                                <div id="contenido_desplegable_' + datos.Id + '" class="sangria pb-2" style="display: none">\
                                    <div id="tablaVistasModulo_' + datos.Id + '" class="tg-grid" name="table">\
                                        <div label-grid="header" tgcolumns="header">\
                                            <div class="alingVcenter alingHcenter">\
                                                <i class="fas fa-plus-square fa-lg" href="#" data-toggle="modal" style="cursor:pointer;" data-target="#modalNuevaVista" title="Crear Vista" onclick="SetIdSelectedModule(' + datos.Id + ')"></i>\
                                            </div>\
                                            <div class="alingVcenter">\
                                                Vistas\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div >\
                                <div></div>\
                            ';
                            break
                        case 2:
                            newRow = '\
                            <div label-grid="row" tgcolumns="row">\
                                < div class="alingVcenter" >\
                                    ' + datos.Name + '\
                                </div >\
                                <div class="alingVcenter">\
                                    <i class="fas fa-file-alt"></i>\
                                </div>\
                                <div class="alingVcenter">\
                                    <i class="fas fa-times"></i>\
                                </div>\
                            </div >\
                                ';
                            break
                    }
                    
                    tabla.append(newRow);
                    nameField.val("");
                    alertVoidName.hide();
                    modal.modal("hide");
                    $(".modal-backdrop").hide();

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
}

// Borra un elemento. 1 = Modulo, 2 = Vista
function BorrarElemento(id) {
    var url;
    var data;
    var idElem;
    var modal;
    switch (id) {
        case 1:
            idElem = $("#idSelectedModule").val();
            modal = $("#modalBorrarModulo");
            url = "/ModalsManagement/DeleteModule";
            data = {
                id = idElem
            }
            postData(url, data)
                .then(data => {
                    if (data.Successful) {
                        var clase = "fila_modulo_" + idElem;
                        var filas = document.getElementsByClassName(clase);
                        for (var i = 0; i < filas.length; i++) {
                            $("." + clase).remove();
                        }
                        modal.modal("hide");
                        $(".modal-backdrop").hide();

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

// Indica el id del modulo seleccionado al clicar en el icono de rear vista
function SetIdSelectedModule(id){
    $("#idSelectedModule").val(id);
    alert("adios");
}

function Hola() {
    alert("adios");
}