let cart = [];
let total = 0;

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

document.getElementById("shopBtn").addEventListener("click", function () {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

});

document.querySelectorAll(".cartBtn").forEach(function(button){

    button.addEventListener("click", function(){

        let card = this.parentElement;

        let name = card.querySelector("h3").innerText;

        let price = parseInt(card.querySelector("h4").innerText.replace(/[^\d]/g,""));

        cart.push({
            name:name,
            price:price
        });

        updateCart();

    });

});

function updateCart(){

    cartCount.innerHTML = cart.length;

    cartItems.innerHTML = "";

    total = 0;

    if(cart.length==0){

        cartItems.innerHTML="<p class='empty-cart'>Your cart is empty.</p>";

        totalPrice.innerHTML=0;

        return;

    }

    cart.forEach(function(item,index){

        total += item.price;

        let div=document.createElement("div");

        div.className="cart-item";

        div.innerHTML=`

        <div>

            <h4>${item.name}</h4>

            <p>₹${item.price}</p>

        </div>

        <button onclick="removeItem(${index})">Remove</button>

        `;

        cartItems.appendChild(div);

    });

    totalPrice.innerHTML=total;

}

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

document.getElementById("openCart").addEventListener("click",function(){

    document.getElementById("cartPage").classList.add("active");

});

document.getElementById("closeCart").addEventListener("click",function(){

    document.getElementById("cartPage").classList.remove("active");

});

document.getElementById("checkoutBtn").addEventListener("click",function(){

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    alert("Order Placed Successfully!\n\nTotal Amount: ₹"+total);

    cart=[];

    updateCart();

    document.getElementById("cartPage").classList.remove("active");

});

window.addEventListener("scroll",function(){

    if(window.scrollY>50){

        document.querySelector("header").style.background="#111";

    }
    else{

        document.querySelector("header").style.background="#222";

    }

});