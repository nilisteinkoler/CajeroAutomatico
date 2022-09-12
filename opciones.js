var saldo = 200

const botonSaldo = document.getElementById('saldoActual')
botonSaldo.addEventListener('click', (evento) => {
        alert('Tu saldo actual es de: '+saldo)
    })

const botonDeposito = document.getElementById('botonDeposito')
botonDeposito.addEventListener('click', (evento) => {
    let montoDeposito = document.getElementById('montoDeposito').value
    var total = saldo + Number(montoDeposito)
    console.log(total)
    saldo = total
    alert('Tu saldo actual es de: '+total)
})

const botonRetiro = document.getElementById('botonRetiro')
botonRetiro.addEventListener('click', (evento) => {
    let montoRetiro = document.getElementById('montoRetiro').value
    var total = saldo - Number(montoRetiro)
    console.log(total)
    saldo = total
    alert('Tu saldo actual es de: '+total)
})












// var saldo = 200

// var button = document.getElementById('saldoActual')
// button.addEventListener('click', (evento) => {
//     function saldoActual(){
//         alert('Tu saldo actual es de: '+saldo)
//     }
// })




// // Mandamos a traer nuestros elementos del DOM
// const form = document.getElementById('signin')
// const consultar = document.getElementById('consultar')
// var button = document.getElementById('saldoActual')
// const ingresar = document.getElementById('ingresar')
// const retirar = document.getElementById('retirar')


// const usuario = 'nili'
// const contrasena = '1234'

// form.addEventListener('submit', (evento) => {
// const inputUsuario = document.getElementById('usuario');
// var nombreUsuario = inputUsuario.value;
// const inputContrasena = document.getElementById('contrasena');
// var contrasenaUsuario = inputContrasena.value;
//     if(nombreUsuario  === usuario && contrasenaUsuario === contrasena){
//         alert('Datos correctos')
//     }
//     else {
//         alert('Datos incorrectos')
//     }
// })

// function retirarMonto(monto){
//     var balance = 200;
//     if(monto % 5 != 0){
//         alert('incorrecto')
//         return false;
//     }
// }

// function ingresarMonto(){
//     var monto = document.getElementById('monto').value;
//     ingresarMonto(monto);
// }
// document.getElementById('enter').addEventListener('click', ingresarMonto);