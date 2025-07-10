var buttonElement = document.querySelector("input");
buttonElement.addEventListener("click", function () {
    var inputElement = document.querySelector("input");
    var celsiusVal = parseInt(inputElement.value);
    var FahrenheitValue = (9 / 5) * celsiusVal + 32;
    var KelvinVal = celsiusVal + 273.15;
    var spanElement = document.querySelector("span");
    var divElement = document.querySelector("span");
    spanElement.innerText = FahrenheitValue.toString();
    divElement.innerText = KelvinVal.toString();
});
