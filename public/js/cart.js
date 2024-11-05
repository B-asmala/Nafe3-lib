document.addEventListener('DOMContentLoaded', function() {
    let sum = 0;

    if(localStorage.length > 0){
        const parentDiv = document.getElementById('cart-info');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            sum += Number(value);

            const newDiv = document.createElement('div');
            
            newDiv.className = 'cart-item';
            newDiv.textContent = `${key} ------ ${value}`;      
            parentDiv.appendChild(newDiv);
        }

        if(sum != 0){
            const newDiv = document.createElement('div');
            
        newDiv.className = 'cart-item';
        newDiv.textContent = `الاجمالي : ${sum}`;      
        parentDiv.appendChild(newDiv);

            //console.log(sum);
            }
    }else{
        let info = document.getElementById('info');
        info.textContent = "رجاء أضف المنتجات إلى سلتك";
        info.style.textDecoration = "none";
        let deleteButton = document.getElementById('delete-cart');
        deleteButton.remove();
    }
    

    

    

    
});


function deleteCart(){
    localStorage.clear();
    //console.log("deleted");
}