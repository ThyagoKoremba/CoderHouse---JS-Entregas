let productos = []; 
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito-en-carrito")) || [];
const contenedorProductos = document.querySelector("#contenedor-productos");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorTotal = document.querySelector("#total");


function cargarProductos() {
    fetch('productos.json') 
        .then(response => response.json())
        .then(data => {
            productos = data; 
            mostrarProductos();
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

function mostrarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$ ${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    localStorage.setItem("carrito-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarCantidadCarrito();
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function actualizarCantidadCarrito() {
    const cantidad = document.querySelector("#cantidad");
    let totalCantidad = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = totalCantidad;
}


cargarProductos();

