const form = document.getElementById("user-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

const nameError = document.getElementById("name-error") as HTMLParagraphElement;
const emailError = document.getElementById(
  "email-error"
) as HTMLParagraphElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    emailInput.value.trim() === "" ||
    !emailRegex.test(emailInput.value.trim())
  ) {
    emailError.textContent = "Valid email is required.";
    isValid = false;
  }

  if (isValid) {
    console.log("Form Data:", {
      name: nameInput.value,
      email: emailInput.value,
    });

    form.reset();
  }
});
