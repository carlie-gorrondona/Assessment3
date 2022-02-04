let favoriteColor = document.querySelector("#color");
let favoritePlace = document.querySelector("#place");
let favoriteRitual = document.querySelector("#ritual");


const favColor = (event) => {

    alert("My favorite color is GREEN.");
}

const favPlace = (event) => {

    alert("My favorite place is Colorado Springs, CO.");
}

const favRitual = (event) => {

    alert("My favorite ritual is treating myself to a self-care day.")
}


favoriteColor.addEventListener("click", favColor);
favoritePlace.addEventListener("click", favPlace);
favoriteRitual.addEventListener("click", favRitual);