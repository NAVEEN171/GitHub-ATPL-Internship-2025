var buttonElement = document.querySelector(
  ".convert-button"
) as HTMLButtonElement;

buttonElement.addEventListener("click", () => {
  let inputElement = document.querySelector(
    ".temperature-input"
  ) as HTMLInputElement;
  let celsiusVal: number = parseInt(inputElement.value);
  let FahrenheitValue: number = (9 / 5) * celsiusVal + 32;
  let KelvinVal: number = celsiusVal + 273.15;
  let farhenHeitShower = document.querySelector(
    ".fahrenheit-result"
  ) as HTMLSpanElement;
  let kelvinShower = document.querySelector(
    ".kelvin-result"
  ) as HTMLSpanElement;

  farhenHeitShower.innerText = FahrenheitValue.toString();
  kelvinShower.innerText = KelvinVal.toString();
});
