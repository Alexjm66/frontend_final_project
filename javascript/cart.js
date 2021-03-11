let productArray = [];
let cartlist = [];

// function fetchData(){
    function getProd() {
        fetch("https://lit-headland-71240.herokuapp.com/list-prod/")
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            let list = document.querySelector('#products');
            console.log(list);
            productArray = data;
            data.forEach((product) => {
                let item =`
                <div class="product-container">
                    <div class="product-image">
                    <img src=${product.image}/>
                    </div>
                    <div class="product-info">
                    <h4>${product.name}</h4>
                    <h4>${product.description}</h4>
                    <h4>${product.price}</h4>
                    <button class="btn" type = "button" onclick="renderCart(${ product.id })">Add to cart</button>
                    </div>
                </div>
                `;
                list.innerHTML += item;
                });
            });
    }
    getProd();

function renderCart() {
    // Get cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
    // Make sure cart is valid
    cart ? cart : cart = [];
    // Total starts at 0
    let total = 0;
    // Get modal element to write data to
    let contentBox = document.getElementById("contents")
    // Reset modal content box
    contentBox.innerHTML = '';
    // Get element to display total price
    let priceBox = document.getElementsByClassName("price")[0]
    // Loop over items in cart
    cart.forEach(item => {
        // add up total
        total = total + parseInt(item.price.substring(1))
        contentBox.innerHTML += `
        <div class="opened-modal-content">
            <div class="product-image">
            <img src=${item.image}/>
            </div>
            <div class="product-info">
            <h4>${item.name}</h4>
            <h4>${item.description}</h4>
            <h4>${item.price}</h4>
            <button class="removeButton" onclick="removeItem(${item.id})">Remove</button>
        </div>
        `;
    })

    priceBox.innerHTML = `R ${total}`
}
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    console.log(cart);
  
    let RemoveAnItem = cart.filter((item) => {
      return item.proid !== id;
    });
  
    localStorage.setItem("cart", JSON.stringify(RemoveAnItem));
  
    console.log("Product Removed");
    renderCart();
    window.location.href = "./cart.html";
  }
  
  function clearCart() {
    localStorage.removeItem("cart"); //clear local storage data
  }
function checkOut(){
    let totals = document.getElementsByClassName("price")[0].innerHTML;
    alert(`Thanks for your purchase, Total${totals}`);
    let clear = "";
    let x = document.getElementById("contents");
    x.innerHTML = clear;

    window.location.href = "./home.html";
}

let modal = document.getElementById("myModal")

let btn = document.getElementById("myBtn")

let span = document.getElementsByClassName("close")[0];

let rmvebtn = document.getElementById("removeButton")

btn.onclick = function(){
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none"
};

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none"
    }
}