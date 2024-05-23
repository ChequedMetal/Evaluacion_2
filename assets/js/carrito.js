document.addEventListener('DOMContentLoaded', function () {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');
    const itemsCarrito = document.getElementById('items-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const botonVaciarCarrito = document.getElementById('vaciar-carrito');
    const botonFinalizarCompra = document.querySelector('.finalizar-compra'); 
    
    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
        itemsCarrito.innerHTML = '';
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${item.nombre} - ${item.cantidad} x ${item.precio.toFixed(2)} €`;
            itemsCarrito.appendChild(li);
        });
        const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
        totalCarrito.textContent = `${total.toFixed(2)} €`;
    }

    document.querySelectorAll('.agregar-carro').forEach(boton => {
        boton.addEventListener('click', function () {
            const nombre = this.getAttribute('nombre-producto');
            const precio = parseFloat(this.getAttribute('precio'));

            const item = carrito.find(i => i.nombre === nombre);
            if (item) {
                item.cantidad += 1;
            } else {
                carrito.push({ nombre, precio, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    if (botonVaciarCarrito) {
        botonVaciarCarrito.addEventListener('click', function () {
            carrito = [];
            actualizarCarrito();
        });
    }

    if (botonFinalizarCompra) {
        botonFinalizarCompra.addEventListener('click', function () {
            window.location.href = 'Guardar_direccion_envio.html';
        });
    }

    actualizarCarrito(); 
});
