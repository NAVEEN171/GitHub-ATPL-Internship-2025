const productImages=[
    "https://m.media-amazon.com/images/I/71z-1j187cL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    "https://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg"
]

let section=document.querySelector("section");
let divtag1=document.createElement("div");
divtag1.classList.add("Image-wrapper")

for(url of productImages){
       let divtag=document.createElement("div");
       let imgTag=document.createElement("img");
       imgTag.src=url;
       divtag.appendChild(imgTag);
       divtag.classList.add("card");
       divtag1.appendChild(divtag);
}

section.append(divtag1);
let absdiv1=document.createElement("button");
absdiv1.innerText="<"
let absdiv2=document.createElement("button");
absdiv2.innerText=">"
absdiv1.classList.add("lt");
absdiv2.classList.add("gt");
section.appendChild(absdiv1);
section.appendChild(absdiv2);
let currentSlide=0;
let intervalID=null;

absdiv1.addEventListener("click",()=>{
    prevSlide();
})

absdiv2.addEventListener("click",()=>{
    nextSlide();
})



function nextSlide(){
    currentSlide+=1;
   currentSlide=currentSlide%(productImages.length);
   let divtag1=document.querySelector(".Image-wrapper");
   divtag1.style.translate=`${-100*currentSlide}% `;
     endInterval();
   startInterval();
}

function prevSlide(){
    currentSlide--;
   currentSlide=currentSlide===-1?productImages.length-1:currentSlide%(productImages.length);
   let divtag1=document.querySelector(".Image-wrapper");
   divtag1.style.translate=`${-100*currentSlide}% `;
   endInterval();
   startInterval();
}

let startInterval=()=>{
   intervalID= setInterval(()=>{
    nextSlide();
   
},3000)
}

const endInterval=()=>{
   clearInterval(intervalID);
}


startInterval();

section.addEventListener("mouseover",()=>{
    endInterval();
})
section.addEventListener("mouseleave",()=>{
    startInterval();
})

