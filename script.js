let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");


const inputLength = () => input.value.length;

const addListAfterClick = () => 
{
	if (inputLength() > 0) {
		createListElement();
	}
}

//create a new list item with a delete button beside it
const createListElement = () => {

//creating the list item
	let li = document.createElement("li");
	li.append(input.value)
	ul.append(li)
	input.value = "";

//creating the delete button
	let delButton = document.createElement("button");
	delButton.append("Delete");
	li.append(delButton);
	delButton.setAttribute("class", "delButton");
	delButton.addEventListener("click",deleteListItemWhenClicked);

}

const deleteListItemWhenClicked = () => {
	let listItems = document.querySelectorAll("li");
	for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", function(){
	this.remove();
	})}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

deleteListItemWhenClicked();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
