var form = document.getElementById("user-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    nameError.textContent = "";
    emailError.textContent = "";
    var isValid = true;
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "" ||
        !emailRegex.test(emailInput.value.trim())) {
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
