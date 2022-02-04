console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted succesfully!")
}

function rubberDuckCompliment(event) {

	alert("You are doing a great job!");
}


let form = document.querySelector('form#contact');
let compliment = document.querySelector("#rubberduck");

form.addEventListener('submit', handleSubmit);
compliment.addEventListener('mouseover', rubberDuckCompliment);