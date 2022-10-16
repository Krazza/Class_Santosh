const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("#item");


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

button.addEventListener("click", function()
{
    localStorage.clear();
    while(ul.firstChild)
    {
        ul.removeChild(ul.firstChild);
    }

    itemsArray = [];
});