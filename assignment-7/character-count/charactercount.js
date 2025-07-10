var textAreaElement = document.querySelector("textarea");
textAreaElement.addEventListener("input", function (e) {
  var textEle = e.target;
  var value = textEle.value;
  console.log(value.length);
  var currentLabel = document.querySelector("label");
  if (!currentLabel) {
    var countShower = document.createElement("label");
    countShower.innerText = "Characters:".concat(value.length);
    document.body.appendChild(countShower);
  } else {
    currentLabel.innerText = "Characters:".concat(value.length);
  }
});
document.body.appendChild(textAreaElement);
