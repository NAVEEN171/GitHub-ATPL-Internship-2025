const { createElement } = require("react");

function gradingSystem(num){
    if(num>=90){
        return 'A';
    }
    else if(num>=89){
        return 'B';
    }
    else if(num>=60){
        return 'C';
    }
    else if(num>=40){
        return 'D'
    }
    else{
        return 'F'
    }

}



function submitHandler(){
    let Inputs=document.querySelectorAll("input");
    let totalMarks=0;
    let avg=0;
    for(Item of Inputs){
        let num=parseInt(Item.value)
        totalMarks+=num;
        let Section=document.querySelector("section");
        let grade=gradingSystem(num);
        let text=Item.name+" "+grade;
        let tag=document.createElement("h1");
        if(grade!=="F"){
            tag.classList.add("pass")
        }
        else{
            tag.classList.add("fail")
        }
        tag.innerText=text;
        Section.appendChild(tag);

    }
    
    avg=totalMarks/Inputs.length;
    
    
}