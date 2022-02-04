
function back() {
    $("#Back").submit();
}

// Guarda el texto que ira en un modal de ayuda
function GuardarInfoModal() {
    var idView = $("#vistaId").val();
    var url = "/EditModal/SaveInfo";
    var data = {
        idView: parseInt(idView),
        title: $("#newModalTitle").val(),
        viewInfo: $("#newModalViewInfo").val(),
        notes: $("#newModalNotes").val()
    };
    postData(url, data)
        .then(data => {
            if (data.Successful) {

                back();

            } else {

                alert("Error\n"+data.CustomError);
                //Código que se ejecuta si el procedimiento ha fallado.

            }
        })
        .catch(error => {

            alert("Error Ajax");
            //Código que se ejecuta si la conexión con el servidor y el procedimiento han fallado.

        }
    );
}

function InsertarIcono(icono) {
    var clase = icono.classList.item(0);
    var textAreaIconos = $("#newModalIconsInfo");
    textAreaIconos.val(textAreaIconos.val() + "<" + clase + ">");
}

function PreviewIcono() {
    var codigo = "&#x" + $("#nuevoCodigoInput").val() + ";";
    var preview = $('#nuevoIcono');
    preview.html(codigo);

    if (preview.width() == 0) {
        $("#botonGuardarIcono").hide();
    }
    else {
        $("#nuevoCodigo").val(codigo);
        $("#botonGuardarIcono").show();
    }
}

function CerrarModalIconos() {
    var preview = $('#nuevoIcono');
    preview.html("");
    $("#nuevoCodigoInput").val("");
    $("#nuevoCodigo").val("");
    $("#botonGuardarIcono").hide();
}

function GuardarIcono() {
    var preview = $('#nuevoIcono');
    if (preview.width() != 0) {
        var codigo = $("#nuevoCodigo").val();
        var nombre = $("#nuevoNombre").val();
        var url = "/EditModal/SaveIcon";
        var data = {
            code: codigo,
            name: nombre
        };
        postData(url, data)
            .then(data => {
                if (data.Successful) {

                    CerrarModalIconos();
                    InsertarIconoEnLista(data.Data.Id, codigo, nombre);

                } else {

                    alert("Error\n" + data.CustomError);

                }
            })
            .catch(error => {

                alert("Error Ajax");

            });
    }
}

function InsertarIconoEnLista1(codigo) {
    var fila = $("#iconosFila1");
    fila.append('<div style="width: 39px; height: 100%; align-content: center; display: flex;">\
                    <i class= "' + codigo + ' m-auto fas fa-lg" style="cursor: pointer; color: @negro;" onclick="InsertarIcono(this)"></i>\
                 </div>\
    ');
}

function InsertarIconoEnLista(id, codigo, nombre) {
    var desplegable = $("#desplegableIconos");
    desplegable.append('<option value="' + id + '_' + codigo + '" class="fa">' + codigo + ' &nbsp; ' + nombre + '</option>');
}

function CambiarIconoSeleccionado() {
    var desplegable = $("#desplegableIconos");
    var id = desplegable.val().split("_")[0];
    var codigo = desplegable.val().split("_")[1];
    var icono = $("#iconoInformacion");

    icono.val(id);
    icono.html(codigo);
}

function CrearInfoIcono() {
    var info = $("#newModalIconsInfo").val();
    if (info == "") {
        alert("Introduce información del icono.");
    }
    else {
        var url = "/EditModal/SaveIconInfo";
        $("#iconoInformacion").val($("#desplegableIconos").val().split("_")[0])
        var data = {
            idModal: parseInt($("#modalId").val()),
            idIcon: parseInt($("#iconoInformacion").val()),
            info: info
        };
        //alert("nose ya\n" + data.idModal + "\n" + data.idIcon + "\n" + data.info);
        postData(url, data)
            .then(data => {
                if (data.Successful) {

                    InsertarInfoIconEnLista(data.Data);

                } else {

                    alert("Error\n" + data.Text);

                }
            })
            .catch(error => {

                alert("Error Ajax ");

            });
    }
    
}

function EliminarInfoIcono(elem) {
    var url = "/EditModal/DeleteIconInfo";
    var datos = {
        id: parseInt(elem.id.split("_")[1])
    };
    postData(url, datos)
        .then(data => {
            if (data.Successful) {

                EliminarInfoIconEnLista(datos.id);

            } else {

                alert("Error\n" + data.Text);

            }
        })
        .catch(error => {

            alert("Error Ajax ");

        });
}

// Recibe un IconsInfo_Model
function InsertarInfoIconEnLista(model) {
    var iconInfo = model.IconInfo;
    var icon = model.Icon;
    var tabla = $("#tablaInfoIconos");
    var negro = "#1f1f27";
    var newItem = '\
    <div id="infoIcono_' + iconInfo.Id + '" class="mb-2" style="display: flex; flex-direction: row; min-height: 56px; border: solid 1px ' + negro + '">\
        <div class="align-self-center" style="display: flex; flex-direction: column; width: 56px;">\
            <i class="fas align-self-center">' + icon.Code + '</i> \
        </div >\
        <div class="p-2" style="flex: 1;  border-left: solid 1px ' + negro + '">\
            ' + iconInfo.Info + '\
        </div >\
        <div style="display: flex; flex-direction: row;">\
            <i id="delete_' + iconInfo.Id + '" class="fas fa-times align-self-start pt-2 pr-2" style="cursor: pointer;" onclick="EliminarInfoIcono(this)"></i>\
        </div >\
    </div >\
    ';

    tabla.append(newItem);
}

function EliminarInfoIconEnLista(id) {
    var fila = $("#infoIcono_" + id);
    fila.remove();
}