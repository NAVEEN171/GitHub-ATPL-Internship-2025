let randomNumber=Math.floor(Math.random()*99+1);
console.log(randomNumber)


function guessNumber(){
    let Input=document.querySelector("input");
    let text="";
    if(Input.value<randomNumber){
        text="too low"

    }
    else if(Input.value>randomNumber){
        text="too high"
    }
    else{
        text="correct!";
    }
    let h1tag=document.querySelector('h1');
    h1tag.innerText=text;

}
