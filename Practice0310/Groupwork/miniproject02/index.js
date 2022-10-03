class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint)
    .then((response) => response.json());
  }
}

const selectBase = document.querySelector("#base-currency");
const selectTarget = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");

const convert = async () =>
{
  const myWrapper = new FetchWrapper("https://v6.exchangerate-api.com/v6/2700f6dbaf7a1a2ac1bed9cc/latest/");
  const data = await myWrapper.get(selectBase.value);
  const targetCurr = selectTarget.value;
  result.textContent = data.conversion_rates[targetCurr]
}

selectBase.addEventListener("change", convert);
selectTarget.addEventListener("change", convert)
