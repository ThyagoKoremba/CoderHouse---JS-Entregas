// Datos pre-cargados de los productos
let productos = [
    { id: 1, nombre: "Procesador", precio: 3000 },
    { id: 2, nombre: "MotherBoard", precio: 1500 },
    { id: 3, nombre: "Fuente", precio: 700 },
    { id: 4, nombre: "Tarjeta Grafica", precio: 4500 },
    { id: 5, nombre: "Mouse", precio: 50 }
];

let carro = {
    items: [],
    total: 0
};

function cargarCarro(producto, cantidad) {
    let carroItem = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
        precioTotal: function() {
            return this.precio * this.cantidad;
        }
    };
    carro.items.push(carroItem);
    carro.total += carroItem.precioTotal();
}

function aplicarDescuento(total, descuento) {
    let aDescontar = total * (descuento / 100);
    return total - aDescontar;
}

function verCarro() {
    let mensaje = "Carrito de compras:\n";
    carro.items.forEach((item, index) => {
        mensaje += (index + 1) + ". " + item.nombre + " - Cantidad: " + item.cantidad + " - Precio Total: $" + item.precioTotal().toFixed(2) + "\n";
    });
    mensaje += "Total: $" + carro.total.toFixed(2);
    alert(mensaje);
}

function modificarCarro() {
    let verMensaje = "Selecciona el número del producto que deseas modificar:\n";
    carro.items.forEach((item, index) => {
        verMensaje += (index + 1) + ". " + item.nombre + " - Cantidad: " + item.cantidad + "\n";
    });

    let seleccionarProductoCarro = parseInt(prompt(verMensaje)) - 1;
    let nuevaCantidad = parseInt(prompt("Introduce la nueva cantidad para " + carro.items[seleccionarProductoCarro].nombre + ":"));
    
    carro.total -= carro.items[seleccionarProductoCarro].precioTotal();
    carro.items[seleccionarProductoCarro].cantidad = nuevaCantidad;
    carro.total += carro.items[seleccionarProductoCarro].precioTotal();
}

let continuar = true;
while (continuar) {
    let listaDeProductos = "Selecciona un producto: \n";
    productos.forEach(producto => {
        listaDeProductos += producto.id + ". " + producto.nombre + " - $" + producto.precio + "\n";
    });

    let seleccionarIDproducto = parseInt(prompt(listaDeProductos));

    let seleccionarProducto = productos.find(product => product.id === seleccionarIDproducto);

    let cantidadDeProducto = parseInt(prompt("Introduce la cantidad que deseas comprar:"));

    cargarCarro(seleccionarProducto, cantidadDeProducto);

    continuar = confirm("¿Deseas agregar otro producto al carrito?");
}

verCarro();

if (confirm("¿Deseas modificar algún producto en tu carrito?")) {
    modificarCarro();
    verCarro();  
}

let descuento = parseFloat(prompt("Introduce el porcentaje de descuento (si es aplicable):"));

let finalTotal = aplicarDescuento(carro.total, descuento);

console.log("Productos en el carrito:", carro.items);
console.log("Total sin descuento: $" + carro.total.toFixed(2));
console.log("Descuento aplicado: " + descuento + "%");
console.log("Total final con descuento: $" + finalTotal.toFixed(2));

alert("Gracias por tu compra. El total a pagar es: $" + finalTotal.toFixed(2));
