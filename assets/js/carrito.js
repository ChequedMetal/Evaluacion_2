document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const finalizePurchaseButton = document.querySelector('.finalize-purchase'); 
    
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${item.name} - ${item.quantity} x ${item.price.toFixed(2)} €`;
            cartItems.appendChild(li);
        });
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.textContent = `${total.toFixed(2)} €`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            const item = cart.find(i => i.name === name);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    if (clearCartButton) {
        clearCartButton.addEventListener('click', function () {
            cart = [];
            updateCart();
        });
    }

    if (finalizePurchaseButton) {
        finalizePurchaseButton.addEventListener('click', function () {
            window.location.href = 'Guardar_direccion_envio.html';
        });
    }

    updateCart(); 
});
