[...document.querySelectorAll('.add')].forEach(function(item) {
    item.addEventListener('click', function() {
        // localStorage.setItem(key, value);

        item.textContent = "تم!";

    });
    });


function addToCart(key, value) {
    localStorage.setItem(key, value);
    const cart = document.getElementById("cart-button");
    cart.style.border = '3px solid rgb(202, 163, 134)';
    cart.style.borderRadius = '10px';
    //console.log(localStorage.getItem(key));
}