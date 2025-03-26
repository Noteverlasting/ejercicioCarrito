const frutas = {
    "pomelo": 2.50,
    "kiwi": 4.20,
    "limon": 1.20,
    "pinya": 2.80
};
const elemento = document.querySelectorAll('img')
elemento.addEventListener('click', () => {
        const cantidad = prompt(`¿Cuántos kilos de ${fruta}s deseas comprar?`);
        for (cada in frutas) {
        if (cantidad > 0) {
            const precioKg = frutas[fruta];
            const total = (cantidad * precioKg).toFixed(2);
            const mensajeCarrito = document.getElementById('carrito');
            mensajeCarrito.innerHTML += `${fruta.charAt(0).toUpperCase() + fruta.slice(1)} ${cantidad} kg x ${precioKg}€/kg = ${total} € <br>`;
        } else {
            alert("Por favor, introduce una cantidad válida.");
        }}
    });



// Object.keys(frutas).forEach(fruta => {
//     const elemento = document.getElementById(fruta);
//     elemento.addEventListener('click', () => {
//         const cantidad = prompt(`¿Cuántos kilos de ${fruta}s deseas comprar?`);
//         if (cantidad > 0) {
//             const precioKg = frutas[fruta];
//             const total = (cantidad * precioKg).toFixed(2);
//             const mensajeCarrito = document.getElementById('carrito');
//             mensajeCarrito.innerHTML += `${fruta.charAt(0).toUpperCase() + fruta.slice(1)} ${cantidad} kg x ${precioKg}€/kg = ${total} € <br>`;
//         } else {
//             alert("Por favor, introduce una cantidad válida.");
//         }
//     });
// });
