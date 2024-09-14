const productos=[
    {
        id: "producto-01",
        titulo: "Tarjeta Grafica",
        imagen: "./fotos/foto1.jpg",
        categoria:{
            nombre:"Componentes",
            id: "componentes"
        },
        precio:4500
    },
    {
        id: "producto-02",
        titulo: "Fuente de Energia",
        imagen: "./fotos/foto2.jpg",
        categoria:{
            nombre:"Componentes",
            id: "componentes"
        },
        precio:700
    },
    {
        id: "producto-03",
        titulo: "Procesador",
        imagen: "./fotos/foto3.jpg",
        categoria:{
            nombre:"Componentes",
            id: "componentes"
        },
        precio:3000
    },
    {
        id: "producto-04",
        titulo: "Mother Board",
        imagen: "./fotos/foto4.jpg",
        categoria:{
            nombre:"Componentes",
            id: "componentes"
        },
        precio:800
    },
    {
        id: "producto-05",
        titulo: "Mouse",
        imagen: "./fotos/foto5.jpg",
        categoria:{
            nombre:"Perifericos",
            id: "perifericos"
        },
        precio:300
    },

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-producto");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto =>{
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
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);


botonesCategorias.forEach(boton=>{
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton=>boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria=productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText=productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarCantidad()
}else{
    productosEnCarrito=[];
}

function agregarAlCarrito(e){
    
    const idBoton = e.currentTarget.id;
    const productoAgregado=productos.find(producto=>producto.id===idBoton);

    if(productosEnCarrito.some(producto=> producto.id=== idBoton)){
        const index=productosEnCarrito.findIndex(producto=> producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad=1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarCantidad();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarCantidad(){
    let totalCantidad = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0); 
    cantidad.innerText = totalCantidad;
}

