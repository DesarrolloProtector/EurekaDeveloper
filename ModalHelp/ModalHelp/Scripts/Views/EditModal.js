
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
                    InsertarIconoEnLista(codigo, nombre);

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
    var nIconos = $("#iconosCount").val();
    var fila = $("#iconosFila1");
    fila.append('<div style="width: 39px; height: 100%; align-content: center; display: flex;">\
                    <i class= "' + codigo + ' m-auto fas fa-lg" style="cursor: pointer; color: @negro;" onclick="InsertarIcono(this)"></i>\
                 </div>\
    ');
}

function InsertarIconoEnLista(codigo, nombre) {
    var fila = $("#desplegableIconos");
    fila.append('<option class="fa">' + codigo + ' &nbsp; ' + nombre + '</option>');
}