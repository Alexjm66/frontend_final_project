let cart = JSON.parse(localStorage.getItem("cart"))
cart ? cart : cart = [];

function updateCartLink(){
    document.getElementById('cart-link').innerHTML = `Cart(${ cart.length })`;
}
updateCartLink()

// Check if cart content is available

let cartContent = document.getElementById('cart-content');
console.log(cartContent);

function renderCart(){
    // Get data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"))
    cartContent.innerHTML='';
    if(cartContent){
        cartContent.innerHTML = `
            <h1 style="text-align:center;">Cart</h1>
            <table style="text-align: left">
                <thead style="background: #ffffff">
                    <tr class="test">
                        <th class=""imgcart">Image</th>
                        <th class="namecart">Name</th>
                        <th class="descart">Category</th>
                        <th class="pricecart">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${ renderCartItems() }
                </tbody>
            </table>
        `
    }
    console.log("Cart Rendered");
}

renderCart()

function renderCartItems(){
    console.log("Rendering Cart Items");
    let content = ''
    cart.forEach(product => {
        content +=`
            <tr>
                <td><img src=${ product.image } alt=${ item.name }/></td>
                <td>${ product.name }</td>
                <td>${ product.description }</td>
                <td>${ product.price}</td>
                <td class="removeBtn"><button type="button" onclick="remove(${ product.id })"> Remove from cart </button></td>
            </tr>
            
        `
    })

    return content;
}


function add(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart ? cart : cart = [];
    cart.push(selectedProduct);
    console.log(cart);
    document.getElementById("cart-link").innerHTML = `Cart(${cart.length })`;
    localStorage.setItem("cart",JSON.stringify(cart));
}

function remove(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    // cart = JSON.parse(cartItem);
    console.log(cart);

    let cartMinusItem = cart.filter(item => {
        return item.id !== id
    })

    localStorage.setItem("cart", JSON.stringify(cartMinusItem));

    console.log("Removing item from cart");
    renderCart()
    window.location.href = "./cart.html"
}

function clearCart(){
    localStorage.removeItem("cart");//clear local storage data
}



function createCart(){
    let inCart;

    let cart = localStorage.getItem("cart");
    console.log("Whats in your cart?", JSON.parse(cart));
}

function showCart(){
    let added = document.getElementById("cartItem");
}
