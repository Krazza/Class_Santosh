const input = document.querySelector("#github-username");
const addBttn = document.querySelector("#get-repos");
const  ul = document.querySelector("#repos-list");

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }
}

addBttn.addEventListener("click", async (e) =>
{
    ul.innerHTML="";
    e.preventDefault();
    let userName = input.value;
    let MyWrapper = new FetchWrapper("https://api.github.com/users/");
    let newEndpoint = userName + "/repos";
    let data = await MyWrapper.get(newEndpoint);

    for(let i = 0; data.length > i; i++)
    {
        const li = document.createElement("li");
        const linkContent = `<a href="${data[i].html_url}">${data[i].name}</a>`;
        li.innerHTML = linkContent;
        ul.appendChild(li);
    }
});
