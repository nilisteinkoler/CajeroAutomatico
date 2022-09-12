const usuario = 'nili'
const contrasena = '1234'

const form = document.getElementById('signin')
form.addEventListener('submit', (evento) => {
    const inputUsuario = document.getElementById('usuario');
    var nombreUsuario = inputUsuario.value;
    const inputContrasena = document.getElementById('contrasena');
    var contrasenaUsuario = inputContrasena.value;
    if(nombreUsuario  === usuario && contrasenaUsuario === contrasena){
        alert('Datos correctos')
    }
    else{
        alert('Datos incorrectos')
    }
})


form.addEventListener('submit', function(evento){
    evento.preventDefault()
    window.location.href= './opciones.html'
})

