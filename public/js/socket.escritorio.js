//Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search); //obtener el url

console.log(searchParams);

if (!searchParams.has('escritorio')) { //si no viene el escritorio
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

//si si viene el escritorio
var escritorio = searchParams.get('escritorio');
var label = $('small');

$('h1').text('Escritorio ' + escritorio); //El encabezado de la pagina escritorio cambia

//Para cambiar el boton
$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket ' + resp.numero);

    });

});