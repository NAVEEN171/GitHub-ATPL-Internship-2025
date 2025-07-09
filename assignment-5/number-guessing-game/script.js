let randomNumber = Math.floor(Math.random() * 99 + 1);

let section = document.querySelector("section");
createCommandLine();

section.addEventListener("keypress",(event)=>{
 
    if(event.key==="Enter"){
      guessNumber();
    }

})

function createCommandLine(){
  let inputElements=document.querySelectorAll("input");
  if(inputElements.length>0){
          inputElements[inputElements.length-1].disabled="true";
  }
 let divtag=document.createElement("div");
 let symboltag=document.createElement("h1");
 symboltag.innerText=">> ";
 let inputtag=document.createElement("input");
 inputtag.setAttribute("type","number");
 inputtag.placeholder="enter a number";
 divtag.appendChild(symboltag);
 divtag.appendChild(inputtag);

 divtag.classList.add("input-line");
 section.appendChild(divtag);
 section.scrollTop=section.scrollHeight;

}


function guessNumber() {
  let InputElements = document.querySelectorAll("input");
  let Input=InputElements[InputElements.length-1];
  let text = "";

  let section = document.querySelector("section");

  let h1tag = document.createElement("h1");
  if (Input.value < randomNumber) {
    text = "too low";
  } else if (Input.value > randomNumber) {
    text = "too high";
  } else {
    text = "   🎉 Correct! You guessed ";
    h1tag.classList.add("pass");
  }

  h1tag.innerText =  text + " - " + Input.value;
  section.appendChild(h1tag);
  if(text!=="   🎉 Correct! You guessed "){
           createCommandLine();
  }
  else{
     section.scrollTop=section.scrollHeight;
  }
}
