let timeoutId = null;

const startTimeout = () => {
  const errorContainer = document.getElementById("errorContainer");
  timeoutId = setTimeout(() => {
    errorContainer.innerHTML = "";
  }, 3000);
};

const endInterval = () => {
  clearTimeout(timeoutId);
};

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorContainer = document.getElementById("errorContainer");

  let errors = [];

  errorContainer.innerHTML = "";

  if (name === "") {
    errors.push("Name is required.");
  }

  if (email === "") {
    errors.push("Email is required.");
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Email is not valid.");
  }

  if (password === "") {
    errors.push("Password is required.");
  } else if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (confirmPassword === "") {
    errors.push("Please confirm your password.");
  } else if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorMessageElement = document.createElement("p");
      errorMessageElement.textContent = error;
      errorMessageElement.classList.add("error-element");
      errorContainer.appendChild(errorMessageElement);
    });
    if (timeoutId) {
      endInterval();
    }

    startTimeout();
    return false;
  }

  return true;
}
