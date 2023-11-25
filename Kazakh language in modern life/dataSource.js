const dataSource = [
    {
        imgSrc: "templates/images/qazaqrepublic.jpeg",
        title: "Qazaq Republic T-shirt",
        description: "Show your national pride with this stylish Qazaq Republic-themed T-shirt.",
        price: "10000",
    },
    {
        imgSrc: "templates/images/senbiClub.jpeg",
        title: "Senbi Club Exclusive Tee",
        description: "Join the Senbi Club with this exclusive T-shirt. Soft and comfortable, perfect for any occasion.",
        price: "9000",
    },
    {
        imgSrc: "templates/images/society.jpeg",
        title: "Society Vibes Tee",
        description: "Embrace the essence of society with this rich and indulgent T-shirt. Perfect for making a statement.",
        price: "11000",
    },
    {
        imgSrc: "templates/images/weareqr.jpeg",
        title: "We Are Qazaqstan Shirt",
        description: "Classic 'We Are Qazaqstan' T-shirt with a hint of vanilla comfort. Show your love for the homeland.",
        price: "12000",
    },
    {
        imgSrc: "templates/images/withouttext.jpeg",
        title: "Peanut Butter Comfort Tee",
        description: "Creamy and nutty comfort wrapped in a Peanut Butter T-shirt. A must-have for casual days.",
        price: "15000",
    },
    {
        imgSrc: "templates/images/jaqsykunder.jpeg",
        title: "Jaqsy Kunder Collection",
        description: "Cinnamon and sugar-coated snickerdoodle T-shirt for those with a taste for the unique. Grab yours now!",
        price: "20000",
    },
];




const cookieItemsContainer = document.getElementById("cookieItems");

dataSource.forEach((cookie, index) => {
    const cookieItem = document.createElement("div");
    cookieItem.classList.add("col-lg-4", "col-md-6", "mb-4");
    cookieItem.setAttribute("data-cookie-id", index + 1);

    cookieItem.innerHTML = `
        <div class="card">
            <img src="${cookie.imgSrc}" class="card-img-top" alt="Cookie ${index + 1}">
            <div class="card-body">
                <h5 class="card-title">${cookie.title}</h5>
                <p class="card-text">${cookie.description}</p>
                <p class="card-text price">${cookie.price} Тг</p>
                <a id="addButton${index}" class="addButton btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `;

    cookieItemsContainer.appendChild(cookieItem);
});

cookieItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("addButton")) {
        const buttonId = event.target.id; 
        const index = buttonId.replace("addButton", ""); 
        const addToCartAudio = new Audio("templates/audio/zapsplat_household_alarm_clock_button_press_12967.mp3");
        addToCartAudio.play();
    }
});


const cartContainer = document.getElementById("cartItems");

const cartItems = [];

function updateCartDisplay() {
    cartContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.title} - Price: $${item.price}</span>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

cookieItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("addButton")) {
        const buttonId = event.target.id; 
        const index = buttonId.replace("addButton", ""); 
        const item = dataSource[index];
        cartItems.push(item);

        updateCartDisplay();
    }
});

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const index = event.target.getAttribute("data-index");
        cartItems.splice(index, 1);
        updateCartDisplay();
    }
});


// const cart = {};

// function addItemToCart(item) {
//     if (cart[item.title]) {
//         cart[item.title].quantity += 1;
//     } else {
//         cart[item.title] = {
//             item: item,
//             quantity: 1,
//         };
//     }

//     updateCartDisplay();
// }
