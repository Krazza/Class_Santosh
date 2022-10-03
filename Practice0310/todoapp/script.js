// write to-do app

//grab dom elements
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("#item");


//use local storage to put the items in array
//use json parse to get items
//else initialize empty array
let itemsArray = localStorage.getItem("items");
if(itemsArray == null)
{
    itemsArray = JSON.parse(localStorage.getItem("items"));
} else 
{
    itemsArray = [];
}

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

function ListMaker(text)
{
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    ListMaker(input.value);
    input.value = "";
});


data.forEach(item => ListMaker(item));
// list of items and append to html

// add event listener for the form, submit
// push the item inside items array

// save it in local storage

// event listener for click bttn
button.addEventListener("click", function()
{
    localStorage.clear();
    while(ul.firstChild)
    {
        ul.removeChild(ul.firstChild);
    }

    itemsArray = [];
});