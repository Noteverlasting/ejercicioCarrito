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

/*
PASOS A LLEVAR A CABO
1. Al ser las frutas strings, y los precios números,se puede declarar una variable "vacia" que almacene el valor de cada fruta y otra variable numerica que almacene el precio.
2. Crear un array para poder almacenar los datos de las frutas compradas (un carrito)
3. Definir en listas las frutas del html, diferenciando las que van por kg y por unidades con sus respectivos precios por kg o ud.
4. Crear funciones que permitan: 
  -que al seleccionar una fruta, se pregunte la cantidad
  -que se calcule segun la cantidad y el precio, el importe de la fruta comprada y se agregue al array de compras con los datos que queremos mostrar: fruta, cantidad, precio y total.
  -que en el <p id="carrito"> se muestre la operación con su resultado y tambien un icono de papelera que permita borrar la fruta y restar el importe borrado.
  -que también se muestre en <span id="preuFinal"> el precio actualizado de todas las frutas compradas, tanto si se añaden como si se restan.
5. Añadir eventListeners que al hacer click en la fruta deseada, activen las funciones.

(*) A tener en cuenta; 
    .los totales deben mostrar dos decimales para facilidad de lectura y calculo.
    .si el valor introducido no es numero, debe tenerse en cuenta para no ejecutar mal las funciones, y se debe avisar al usuario del error.
    
*/

//VARIABLES

//Creamos una variable dinamica vacía para almacenar el valor que irá cambiando segun la fruta
let frutaSeleccionada = ""
// Variable global para el total de la compra
let totalCompra = 0
//Variable array para poder almacenar los items (frutas) que se compren, y poder seleccionarlos.
let mostrarCompra = []


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
//Añadimos en la ultima posición del array mostrarCompra, las claves y valores de la fruta comprada
    mostrarCompra.push({
        nombre: frutaSeleccionada,
        cantidad: cantidadDecimal,
        precio: precio,
        total: totalFruta
    })

//Creamos una variable que obtenga el elemento con id #carrito 
    let mensajeCarrito = document.getElementById('carrito')
/*  Le cambiamos el html interno para que muestre un span asociado a un evento onclick que ejecute la funcion borrarFruta,
    la cual se ejecutará sobre el índice del último elemento agregado al array mostrarCompra (length - 1).
    Este span tambien contiene el icono de papelera (trash) para poder clicar y activar el evento. 
    Por último se muestra el mensaje del resultado de las operaciones; con la fruta, su cantidad, precio y total  */
    mensajeCarrito.innerHTML += `<span class="borrar" onclick="borrarFruta(${mostrarCompra.length - 1})"><i class="fa-solid fa-trash-can fa-xs"></i></span> ${frutaSeleccionada} : ${cantidadDecimal} kg x ${precio}€/kg = ${totalFruta} € <br>`
    //Aqui se suma el totalFruta (pasado a numeros flotantes-con decimales- ya que .toFixed(2) devuelve un string) al totalCompra 
    totalCompra += parseFloat(totalFruta)
    //Llamamos a la funcion que actualizará el total en el carrito (declarada despues)
    actualizarTotalCompra();
    console.log(mostrarCompra)
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
        mostrarCompra.push({
            nombre: frutaSeleccionada,
            cantidad: cantidadDecimal,
            precio: precio,
            total: totalFruta
        })
        mensajeCarrito.innerHTML += `<span onclick="borrarFruta(${mostrarCompra.length - 1})"class="borrar"><i class="fa-solid fa-trash-can fa-xs"></i></span> ${frutaSeleccionada} : ${cantidadDecimal} ud x ${precio}€/ud = ${totalFruta} € <br>`;
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
    //Cambiamos el html para que muestre la variable totalCompra con 2 decimales.
    totalHTML.innerHTML = `${totalCompra.toFixed(2)} €`; 
}

//Elimina un ítem de la lista mostrarCompra usando el índice y actualiza el carrito y el total de la compra.
function borrarFruta(indice) {
    /* Restamos de totalCompra el valor de 'total' que corresponda al índice dentro del array mostrarCompra,
    el cual indicamos antes en el span agregado por innerHTML de las funciones seleccionarFruta/seleccionarUnidades
    */
    totalCompra -= parseFloat(mostrarCompra[indice].total);
    //Eliminamos 1 ítem desde el índice indicado en el array mostrarCompra
    mostrarCompra.splice(indice, 1);
    //Actualizamos carrito y total compra
    actualizarCarrito();
    actualizarTotalCompra();
  }

//Esta funcion primero limpia el contenido del html del carrito y recorre los ítems e indices de mostrarCompra, para actualiza la visualización del carrito en la página, mostrando los ítems restantes.
function actualizarCarrito() {
    let mensajeCarrito = document.getElementById("carrito");
    // Limpiamos el contenido actual del carrito
    mensajeCarrito.innerHTML = ""; 
  
    // Mostramos de nuevo todos los ítems restantes en el html borrado, recorriendo los datos que tenemos en el array mostrarCompra con dos parámetros.
    //El primer parámetro será siempre el elemento del array (en este caso, el producto del carrito, que podría ser item).
    //El segundo parámetro será siempre el índice del elemento dentro del array (en este caso, index).
    mostrarCompra.forEach((item, index) => {
      mensajeCarrito.innerHTML += `<span class="borrar" onclick="borrarFruta(${index})"><i class="fa-solid fa-trash-can fa-xs"></i></span> ${item.nombre} : ${item.cantidad} x ${item.precio}€/kg = ${item.total} € <br>`;
    });
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