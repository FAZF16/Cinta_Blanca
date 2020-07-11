// alert('DESCARGA YAAAA!')

// if(condicion){
//     accion si es true
// } else {
//     accion si es false
// }

// < menor que
// <= manor igual
// > meyor que
// >= mayor igual
// = asigna valor ---> var nombre = 'Ricardo'
// == compara el caracter
// === compara indenticamente --> el caracter y su tipo valor



if ( 10 === '10') {
    console.log('Es verdad')
}else {
    console.log('Es falso')
}

//  ------------ Challenge ----------------
// Preguntar al usuario un numero
// Este numero decir si es  par o es impar


var pregunta= prompt("pon un número, ¿será par o impar?")

var numero= Number(pregunta)

if (numero % 2 === 0) {
    console.log("par")
} else{
    console.log("impar")
}

// resuelto por Ricardo, por si el usuario no pone un numero, se marque un error.

var pregunta = prompt('Ingresa un numero')

var numero = Number(pregunta)

if(numero % 2 === 0){
    console.log(numero + ': es par')
}else if(numero % 2 === 1){
    console.log(numero + ': es impar')
}else {
    // console.log('Error al ingresar numeros')
    console.error('Error al ingresar numeros: ' + numero)


//and &&
//or ||
if(edad >= 18 && edad <= 80 ){
    console.log('Puedes conducir')
}else if (edad === 17 || edad === 16 ){
    console.log('Puedes sacar el permiso para conducir')
}else if(edad < 16 || edad > 80 ){
    console.warn('No puedes conducir')
}else{
    console.error('Ingresaste mal tu edad')
}

//     comp 1                  comp2
//  comp a    comp b         comp a      comp b
if(edad < 18 && edad > 10 || edad < 10 && edad === 5) 
// --->aqui falta un { <---
    console.log('Estamos cool')
}