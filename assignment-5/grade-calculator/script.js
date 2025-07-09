function gradingSystem(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 89) {
    return "B";
  } else if (num >= 60) {
    return "C";
  } else if (num >= 40) {
    return "D";
  } else {
    return "F";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gradeForm");

  form.addEventListener("submit", submitHandler);
});

function submitHandler(e) {
  e.preventDefault();
  let Inputs = document.querySelectorAll("input");
  let totalMarks = 0;
  let avg = 0;
  let Section = document.querySelector("section");
  Section.innerHTML = "";
  for (Item of Inputs) {
    let num = parseInt(Item.value);
    totalMarks += num;
    let grade = gradingSystem(num);
    let text = Item.name + " -  " + grade;
    let tag = document.createElement("h1");
    if (grade !== "F") {
      tag.classList.add("pass");
    } else {
      tag.classList.add("fail");
    }
    tag.innerText = text;
    Section.appendChild(tag);
  }

  avg = totalMarks / Inputs.length;
}
