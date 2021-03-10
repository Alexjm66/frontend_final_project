let productArray = [];
let cartlist = [];

// function fetchData(){
    function getProd() {
        fetch("http://127.0.0.1:5000/list-prod/")
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
                    <button class="btn" type = "button" onclick="add_to_cart(${ product.id })">Add to cart</button>
                    </div>
                </div>
                `;
                list.innerHTML += item;
                });
            });
    }
    getProd();
    
//     fetch("http://127.0.0.1:5000/list-prod/")
//         .then((response) => {
//             if (response.ok) {
//                 console.log("Success");
//             }else{
//                 console.log("NOT SUCCESSFUL");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             let productList = document.querySelector("#products");

//             productArray = data;
//             data.forEach((product) => {
//                 let productItem = `
//                 <div class="product-card">
//                     <div class="product-image">
//                     <img id=${product.ID} class="prodcts-images" src=${product.image}
//                     </div>
//                     <div class="product-info">
//                     <h3 id="${product.name}">${product.name}</h3>
//                     <h3 id="${product.description}">${product.description}</h3>
//                     <h3 id="${product.price}">R${product.price}</h3>
//                     <button class="add_cart" onclick="add_to_cart(${product.id}">Add to cart</button>
//                 </div>`;

//                 productList.innerHTML += productItem;
//             });
            
//         })
// }
function cartCount(){
    let x = productCount;
    document.getElementById("lblCartCount").innerHTML = x;
}
function add_to_cart(id){

    // let cart = JSON.parse(localStorage.getItem("cart"));
    // cart ? cart : cart = [];
    
    // fetch('http://127.0.0.1:5000/list-prod/')
    // .then(res => res.json())
    // .then((data) => {
    //     let selectedItem = data.filter((product) => {
    //         return product.id = id
    //     })

    //     if(selectedItem.length > 0){
    //         cart.push(selectedItem[0]);
    //         localStorage.setItem("cart", JSON.stringify(cart))
    //         alert("Item has been added to cart")
    //     }
    // })

    let modal= document.getElementById("contents")
    let cartItem = productArray.filter((product) => {
        return product.id == id;
    });
    productCount = cartlist.push(cartItem[0]);
    let selectedItems = cartItem[0];
    console.log(productCount)
    console.log(selectedItems)
    console.log(cartItem)

    let cart_stuff = `
    <div class="opened-modal-content">
    <div id="items${id}" product-prices=${selectedItems.price}>${selectedItems.name} :${selectedItems.price}</div>
    <button class="removeButton" onclick="removeItems(${id})">Remove</button>
    </div>
    `;

    modal.innerHTML += cart_stuff;

    console.log(cartlist);
    console.log(productCount);

    function calculateTotalPrice(id){
        let totalValue = document.getElementsByClassName("price")[0];
        let num1 = parseInt(totalValue.innerHTML);
        let num2 = document
        .getElementById("items" + id)
        .getAttribute("product-prices");
    
        let totalAmount = parseInt(num1) + parseInt(num2)
        totalValue.innerHTML = totalAmount;
        console.log(totalValue);
    }
    calculateTotalPrice()
    cartCount()
}


function checkOut(){
    let totals = document.getElementsByClassName("price")[0].innerHTML;
    alert(`Thanks for your purchase, Total${totals}`);
    let clear = "";
    let x = document.getElementById("contents");
    x.innerHTML = clear;


    document.getElementById("lblCartCount").innerHTML = f;
    window.location.href = "./index.html";
}

let modal = document.getElementById("myModal")

let btn = document.getElementById("myBtn")

let span = document.getElementsByClassName("close")[0];

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