const productImages = [
  "https://m.media-amazon.com/images/I/71z-1j187cL._SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  "https://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg",
];

let section = document.querySelector("section");
let imagesWrapper = document.createElement("div");
imagesWrapper.classList.add("Image-wrapper");

for (url of productImages) {
  let card = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = url;
  card.appendChild(imgTag);
  card.classList.add("card");
  imagesWrapper.appendChild(card);
}

section.append(imagesWrapper);
let leftArrowBtn = document.createElement("button");
leftArrowBtn.innerText = "<";
let rightArrowBtn = document.createElement("button");
rightArrowBtn.innerText = ">";
leftArrowBtn.classList.add("lt");
rightArrowBtn.classList.add("gt");
section.appendChild(leftArrowBtn);
section.appendChild(rightArrowBtn);
let currentSlide = 0;
let intervalID = null;

leftArrowBtn.addEventListener("click", () => {
  prevSlide();
});

rightArrowBtn.addEventListener("click", () => {
  nextSlide();
});

function nextSlide() {
  currentSlide += 1;
  currentSlide = currentSlide % productImages.length;
  let imagesWrapper = document.querySelector(".Image-wrapper");
  imagesWrapper.style.translate = `${-100 * currentSlide}% `;
  endInterval();
  startInterval();
}

function prevSlide() {
  currentSlide--;
  currentSlide =
    currentSlide === -1
      ? productImages.length - 1
      : currentSlide % productImages.length;
  let imagesWrapper = document.querySelector(".Image-wrapper");
  imagesWrapper.style.translate = `${-100 * currentSlide}% `;
  endInterval();
  startInterval();
}

let startInterval = () => {
  intervalID = setInterval(() => {
    nextSlide();
  }, 3000);
};

const endInterval = () => {
  clearInterval(intervalID);
};

startInterval();

section.addEventListener("mouseover", () => {
  endInterval();
});
section.addEventListener("mouseleave", () => {
  startInterval();
});
