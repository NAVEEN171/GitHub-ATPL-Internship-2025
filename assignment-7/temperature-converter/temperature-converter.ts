var buttonElement = document.querySelector("input") as HTMLButtonElement;

buttonElement.addEventListener("click", () => {
  let inputElement = document.querySelector("input") as HTMLInputElement;
  let celsiusVal: number = parseInt(inputElement.value);
  let FahrenheitValue: number = (9 / 5) * celsiusVal + 32;
  let KelvinVal: number = celsiusVal + 273.15;
  let spanElement = document.querySelector("span") as HTMLSpanElement;
  let divElement = document.querySelector("span") as HTMLDivElement;

  spanElement.innerText = FahrenheitValue.toString();
  divElement.innerText = KelvinVal.toString();
});
