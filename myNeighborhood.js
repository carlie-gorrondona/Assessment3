let restaurant = document.querySelector(".restaurantbutton")

const randomRestaurant = () => {

    randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    switch (randomNumber) {
        case 0 : 
            alert("Sherlock's Baker St. Pub and Grill");
            break;
        case 1 :
            alert("Vidorra");
            break;
        case 2 :
            alert("Neighborhood Services");
            break;
        case 3 :
            alert("Stirr");
            break;
        case 4 :
            alert("Yard House");
            break;
        default :
            alert("Error: something went wrong");
            break;
    }
}

restaurant.addEventListener("click", randomRestaurant);