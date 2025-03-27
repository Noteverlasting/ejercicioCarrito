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



//VARIABLES

//Creamos una variable dinamica vacía para almacenar el valor que irá cambiando segun la fruta
let frutaSeleccionada = ""
// Variable global para el total de la compra
let totalCompra = 0


//LISTAS (Objetos)

//Declaramos una constante que será un objeto, el cual incluye los nombres de las frutas y su precio por kilo
const precios = {
    pomelo: 2.50,
    kiwi: 4.20,
    limon: 1.20,
    sandia: 1.20,
    freson: 6.20,
    mandarina: 1.90,
    fuji: 3.00,
    platano : 3.20,
    pera: 1.80,
    golden: 3.50
  }

//Declaramos otra constante para las frutas que se compran por unidad en lugar de por kilo.
const unidades = {
    pinya : 2.80,
    aguacate : 2.50
}


//FUNCIONES

//Creamos una función para poder repetirla ya que hay muchos items. No le declaramos un parámetro para poder variarlo con "frutaSeleccionada"
function seleccionarFruta() {
    //Primero declaramos cantidad como un prompt que pregunta cuantos kg de la variable frutaSeleccionada se quieren
    let cantidad = prompt(`¿Cuántos kg de ${frutaSeleccionada} quieres?`)
    //Si la cantidad es mayor que a 0 y es un numero,  indicamos que se ejecute el bloque de codigo con estas operaciones: 
    if (cantidad > 0 && !isNaN(cantidad)) {
/*Como la variable cantidad es un prompt, devuelve un string, así que para poder acortar los decimales, 
la pasamos a Float (numero) y le indicamos que muestre 2 decimales con .toFixed */ 
    let cantidadDecimal = parseFloat(cantidad).toFixed(2)

//Declaramos la variable precio que será el valor de frutaSeleccionada en la variable objeto precios
    let precio = precios[frutaSeleccionada]
//Calculamos en una variable el precio total, que será la multiplicacion de la cantidad por el precio.
    let totalFruta = (cantidadDecimal * precio).toFixed(2)
//Creamos una variable que obtenga el elemento con id #carrito 
//Y le cambiamos el html interno para que muestre el icono de la papelera y el mensaje de la operación con la fruta, su cantidad, precio y total
    let mensajeCarrito = document.getElementById('carrito')
    mensajeCarrito.innerHTML += `<span class="borrar"><i class="fa-solid fa-trash-can fa-xs"></i></span> ${frutaSeleccionada} : ${cantidadDecimal} kg x ${precio}€/kg = ${totalFruta} € <br>`
    // Sumar el totalFruta al totalCompra
    totalCompra += parseFloat(totalFruta)
    // Actualizar el total en el carrito
    actualizarTotalCompra();

//Si la cantidad no es válida,se muestra una alerta y finaliza la función
    } else {
        alert('Por favor ingresa una cantidad válida');
    }
}



//Creamos una funcion similar, solo que en lugar de los precios por kilo, serán por unidades. 
function seleccionarUnidades() {
    let cantidad = prompt(`¿Cuántas unidades de ${frutaSeleccionada} quieres?`)
    
    if (cantidad > 0 && !isNaN(cantidad)) {
        let cantidadDecimal = parseFloat(cantidad).toFixed(2);
        let precio = unidades[frutaSeleccionada];
        let totalFruta = (cantidadDecimal * precio).toFixed(2);
        let mensajeCarrito = document.getElementById('carrito');
        mensajeCarrito.innerHTML += `<span class="borrar"><i class="fa-solid fa-trash-can fa-xs"></i></span> ${frutaSeleccionada} : ${cantidadDecimal} ud x ${precio}€/ud = ${totalFruta} € <br>`;
        totalCompra += parseFloat(totalFruta)
        actualizarTotalCompra()
    
    } else {
        alert('Por favor ingresa una cantidad válida');
    }
  }

//Creamos una función para actualizar el total de la compra
function actualizarTotalCompra() {
    // Obtenemos el elemento con el id #preuFinal almacenado en la variable totalHTML
    let totalHTML = document.getElementById('preuFinal');
    //Cambiamos el html para que muestre el total de la compra con 2 decimales
    totalHTML.innerHTML = `${totalCompra.toFixed(2)} €`; 
}






//EJECUCIÓN DE LAS FUNCIONES

//Creamos una constante para cada fruta, que obtenga el elemento con el id de la misma
const pomelo = document.getElementById('pomelo')
//Le agregamos un event listener el cual al hacer click ejecutará lo siguiente:
pomelo.addEventListener('click', () => {
    //Que la variable frutaSeleccionada sea pomelo
  frutaSeleccionada = 'pomelo'
   //Que se ejecute la función seleccionarFruta, la cual hemos definido antes
  seleccionarFruta()
})

//Repetimos el proceso para todas las frutas
const kiwi = document.getElementById('kiwi')
kiwi.addEventListener('click', () => {
  frutaSeleccionada = 'kiwi'
  seleccionarFruta()
})

const limon = document.getElementById('limon')
limon.addEventListener('click', () => {
    frutaSeleccionada = 'limon'
    seleccionarFruta()
})

const pinya =document.getElementById('pinya')
pinya.addEventListener('click', () => {
    frutaSeleccionada = 'pinya'
    seleccionarUnidades()
})

const sandia =document.getElementById('sandia')
sandia.addEventListener('click', () => {
    frutaSeleccionada = 'sandia'
    seleccionarFruta()
})

const aguacate = document.getElementById('aguacate')
aguacate.addEventListener('click', () => {
    frutaSeleccionada = 'aguacate'
    seleccionarUnidades()
})

const freson =document.getElementById('freson')
freson.addEventListener('click', () => {
    frutaSeleccionada = 'freson'
    seleccionarFruta()
})

const mandarina = document.getElementById('mandarina')
mandarina.addEventListener('click', () => {
    frutaSeleccionada = 'mandarina'
    seleccionarFruta()
})

const fuji = document.getElementById('fuji')
fuji.addEventListener('click', () => {
  frutaSeleccionada = 'fuji'
  seleccionarFruta()
})

const platano = document.getElementById('platano')
platano.addEventListener('click', () => {
    frutaSeleccionada = 'platano'
    seleccionarFruta()
})

const pera = document.getElementById('pera')
pera.addEventListener('click', () => {
    frutaSeleccionada = 'pera'
    seleccionarFruta()
})

const golden = document.getElementById('golden')
golden.addEventListener('click', () => {
    frutaSeleccionada = 'golden'
    seleccionarFruta()
})


const borraFruta = document.querySelectorAll('.borrar')
borraFruta.addEventListener('click', () => { 
    totalCompra -= TotalFruta
    actualizarTotalCompra()
    })