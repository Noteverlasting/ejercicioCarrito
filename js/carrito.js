/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */


//PRIMERO - definimos constantes para cada una de las frutas, a las que hemos dado un id en el html
const pomelo = document.getElementById('pomelo')
//SEGUNDO - le aplicamos un EventListener que ejecute la función al hacer click
pomelo.addEventListener('click', () => {
    //TERCERO - definimos la función que se ejecutará: 
    //a) declaramos la constante cantidad, que muestra un prompt
    const cantidad = prompt("¿Cuántos kilos de pomelos deseas comprar?");
    //b) declaramos un if, si cantidad es mayor que 0 (valida) se ejecuta el codigo
    if (cantidad > 0) {
        // Esta const declara el valor del precioKg
        const precioKg = 2.50
        // Esta const realiza la operación cantidad * precioKg, y la pasa a numero entero con 2 decimales
        const total = (cantidad * precioKg).toFixed(2)
        // Esta const toma el id #carrito
        const mensajeCarrito = document.getElementById('carrito')
        // Aqui se indica que el html dentro de la const mensajeF sea el que definimos despues del =
        mensajeCarrito.innerHTML += `Pomelo ${cantidad} kg x ${precioKg}€/kg = ${total} € <br>`
    //c) en cualquier otro caso que la cantidad no sea mayor que 0, se ejecuta este else, que muestra un alert
    } else {
        alert("Por favor, introduce una cantidad válida.")
    }
});
//CUARTO - Repetimos para todas las frutas
const kiwi = document.getElementById('kiwi')
kiwi.addEventListener('click', () => {
    const cantidad = prompt("¿Cuántos kilos de kiwis deseas comprar?")
    if (cantidad > 0) {
        const precioKg = 4.20
        const total = (cantidad * precioKg).toFixed(2)
        const mensajeCarrito = document.getElementById('carrito')
        mensajeCarrito.innerHTML += `Kiwi ${cantidad} kg x ${precioKg}€/kg = ${total} € <br>`
        } else {
        alert("Por favor, introduce una cantidad válida.")
        }
})

const limon = document.getElementById('limon')
limon.addEventListener('click', () => {
    const cantidad = prompt("¿Cuántos kilos de limones deseas comprar?")
    if (cantidad > 0) {
        const precioKg = 1.20
        const total = (cantidad * precioKg).toFixed(2)
        const mensajeCarrito = document.getElementById('carrito')
        mensajeCarrito.innerHTML += `Limón ${cantidad} kg x ${precioKg}€/kg = ${total} € <br>`
        } else {
        alert("Por favor, introduce una cantidad válida.")
        }
})

const pinya = document.getElementById('pinya')
pinya.addEventListener('click', () => {
    const cantidad = prompt("¿Cuántas unidades de piña deseas comprar?")
    if (cantidad > 0) {
        const precioKg = 2.80
        const total = (cantidad * precioKg).toFixed(2)
        const mensajeCarrito = document.getElementById('carrito')
        mensajeCarrito.innerHTML += `Piña ${cantidad} ud x ${precioKg}€/ud = ${total} € <br>`
        } else {
        alert("Por favor, introduce una cantidad válida.")
        }
})

const sandia = document.getElementById('sandia')
sandia.addEventListener('click', () => {
    const cantidad = prompt("¿Cuántos kilos de sandia deseas comprar?")
    if (cantidad > 0) {
        const precioKg = 3.50
        const total = (cantidad * precioKg).toFixed(2)
        const mensajeCarrito = document.getElementById('carrito')
        mensajeCarrito.innerHTML += `Sandia ${cantidad} ud x ${precioKg}€/kg = ${total} € <br>`
        } else {
            alert("Por favor, introduce una cantidad válida.")
        }
    })