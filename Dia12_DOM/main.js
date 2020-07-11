let titulo= document.getElementById ("titulo")
let nombre= document.getElementById ("nombre")
let direccion = document.getElementById ("direccion")
let telefono= document.getElementById("telefono")
let boton=  document.getElementById("boton")
let res1= document.getElementById("res1")
let res2= document.getElementById("res2")
let res3= document.getElementById("res3")
let res4= document.getElementById("res4")
let pina= document.getElementById("pina")
let pf= document.getElementById("pf")
let imagen1= document.getElementById ("imagen1")
let errorp= document.getElementById ("errorp")
let ordenarnone= document.getElementsByClassName("ordenarnone")
let padre=  document.getElementById ("padre")

const ordenar = () => {
res1.innerHTML =  "Nombre: " + nombre.value
res2.innerHTML =  "Dirección: " + direccion.value
res3.innerHTML =  "Teléfono: " + telefono.value
res4.innerHTML =  "¿Con o sin Piña?: " + pina.value



let pinareal= pina.value.toLowerCase()
if( pinareal === "sin"){
imagen1.src =  "./assets/sin.jpg"
} else if(pinareal === "con"){
  imagen1.src= "./assets/con.jpg"
} else {
errorp.innerHTML= "Error,vuelve a ingresar como quires tu pizza"}
padre.classList.remove("ordenarnone")

}



boton.addEventListener("click", ordenar)

