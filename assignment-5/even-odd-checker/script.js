const submitHandler = () => {
  const Input = document.getElementById("text-tab");

  const val = parseInt(Input.value);
  if (val === 0) {
    alert("Please enter a valid number!");
    return;
  }
  if (val % 2 === 0) {
    alert("Even");
  } else {
    alert("ODD");
  }
};
