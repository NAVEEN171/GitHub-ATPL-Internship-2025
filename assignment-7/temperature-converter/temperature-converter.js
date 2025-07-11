var buttonElement = document.querySelector(".convert-button");
buttonElement.addEventListener("click", function () {
    var inputElement = document.querySelector(".temperature-input");
    var celsiusVal = parseInt(inputElement.value);
    var FahrenheitValue = (9 / 5) * celsiusVal + 32;
    var KelvinVal = celsiusVal + 273.15;
    var farhenHeitShower = document.querySelector(".fahrenheit-result");
    var kelvinShower = document.querySelector(".kelvin-result");
    farhenHeitShower.innerText = FahrenheitValue.toString();
    kelvinShower.innerText = KelvinVal.toString();
});
