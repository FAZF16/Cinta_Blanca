// alert ("hola si funciona")
var jugador1= prompt("Jugador 1, qué Eliges ¿piedra, papel, o tijeras").toLowerCase()

var jugador2= prompt("Jugador 2, qué Eliges ¿Piedra, papel, o tijeras").toLowerCase()

if ( jugador1 === "piedra" && jugador2 === "tijeras" || jugador1 === "tijeras" && jugador2 === "papel" || jugador1 == "papel" && jugador2 === "piedra" ) {
    console.log ("Ganaste, primer jugador")
}

 else if ( jugador2 === "piedra"  && jugador1 === "tijeras" || jugador2 === "tijeras" && jugador1 === "papel" || jugador2 === "papel" && jugador1 === "piedra" ) {
    console.log ("Ganaste, Segundo jugador")

}
else if ( jugador1 === jugador2){
console.log("Empate, vuelva a jugar")

} else {
console.error ("datos mal ingresados")
}
