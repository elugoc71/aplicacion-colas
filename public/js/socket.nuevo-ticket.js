//comando para establecer la conexion al servidor
var socket = io();
var label = $('#lblNuevoTicket'); //hacemos referencia a la etique que esta en nuevo-ticket.html

socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Perdimos conexion al servidor');
});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);
});

$('button').on('click', function() {
    //esto es jquery y hay un curso para eso

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);

    });
});