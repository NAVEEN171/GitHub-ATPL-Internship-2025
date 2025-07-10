var textAreaElement: HTMLTextAreaElement = document.querySelector("textarea")!;

textAreaElement.addEventListener("input", (e: Event) => {
  const textEle = e.target as HTMLTextAreaElement;
  let value: string = textEle.value;
  console.log(value.length);
  let currentLabel = document.querySelector("label");
  if (!currentLabel) {
    let countShower = document.createElement("label") as HTMLLabelElement;
    countShower.innerText = `Characters:${value.length}`;
    document.body.appendChild(countShower);
  } else {
    currentLabel.innerText = `Characters:${value.length}`;
  }
});
document.body.appendChild(textAreaElement);
