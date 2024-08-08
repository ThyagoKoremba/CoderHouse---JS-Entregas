const CalcularTotal=(cantidad, precioProducto)=>{
return cantidad*precioProducto;
}

function calcularPrecio(producto){
let cantidad, flag=true, total;
    while(flag==true){
        if (producto==1){;
            cantidad=parseInt(prompt('Ingrese la cantidad'));
            if (cantidad>=0){
                flag=false;
                total=CalcularTotal(cantidad, 3000);
                alert(`El total del Producto es: $${total}`);
            } else{
                alert('Debe Ingresar un valor positivo o 0(cero) si no quiere comprar');
            }
        } else if (producto==2){
            cantidad=parseInt(prompt('Ingrese la cantidad'));
            if (cantidad>=0){
                flag=false;
                total=CalcularTotal(cantidad, 1500);
                alert(`El total del Producto es: $${total}`);
            } else{
                alert('Debe Ingresar un valor positivo o 0(cero) si no quiere comprar');
            }
        }else if (producto==3){
            cantidad=parseInt(prompt('Ingrese la cantidad'));
            if (cantidad>=0){
                flag=false;
                total=CalcularTotal(cantidad, 700);;
                alert(`El total del Producto es: $${total}`);
            } else{
                alert('Debe Ingresar un valor positivo o 0(cero) si no quiere comprar');
            }
        }else if(producto==4){
            cantidad=parseInt(prompt('Ingrese la cantidad'));
            if (cantidad>=0){
                flag=false;
                total=CalcularTotal(cantidad, 4500);
                alert(`El total del Producto es: $${total}`);
            } else{
                alert('Debe Ingresar un valor positivo o 0(cero) si no quiere comprar');
            }
        }
    }
    return total;
}
function verificacionDeCompra(total){
    let flag;
    if (total>0){
        flag=true;
    }else{
        flag=false;
    }
    return flag;
}

let opcion=1, precioTotal=0, precioTotalProducto
flag=false;
alert(`Bienvenido a PC's Shop`);
alert('A continuación se le mostrara las opciones de compra');
while(opcion!=0){
    alert(`
            1 - Procesador $3000
            2 - MotherBoard $1500
            3 - Fuente $700
            4 - Tarjeta Grafica $4500
            0 - PARA SALIR`);
            opcion=parseInt(prompt('Ingrese que quiere comprar'));
            if ((opcion>0 && opcion<5)){
                precioTotalProducto=calcularPrecio(opcion);
                precioTotal=precioTotalProducto+precioTotal;
                flag=verificacionDeCompra(precioTotal);
            }else if(opcion==0 && flag==true){
                alert(`
                    El total de su compra es $${precioTotal}
                    Si paga en efectivo tiene un descuento del 10%.
                    En efectivo el total es de $ ${precioTotal-precioTotal*0.1}`);
            }else if(opcion==0){
                alert('Gracias por visitarnos');
            }else{
                alert('La opcion no es valida. Vuelva a intentar');
            }
}
