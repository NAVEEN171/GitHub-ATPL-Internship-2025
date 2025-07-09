function generateTable() {
  let Input = document.querySelector("input");
  let num = 0;
  let Section = document.querySelector("section");
  Section.innerHTML = "";

  if (Input) {
    num = Input.value;

    for (let i = 1; i <= 10; i++) {
      let h1tag = document.createElement("h1");
      let row = `${num} x ${i} = ${num * i}`;
      h1tag.innerText = row;
      Section.appendChild(h1tag);
    }
  }
}
