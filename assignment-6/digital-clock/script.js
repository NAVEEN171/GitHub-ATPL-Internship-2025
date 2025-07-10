const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
  } else {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  }
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateClock();
setInterval(updateClock, 1000);
