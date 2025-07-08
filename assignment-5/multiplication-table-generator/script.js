function generateTable(){
    let Input=document.querySelector("input");
    let num=0;
    if(Input){
        console.log(Input.value);
        num=Input.value;
        let Section=document.querySelector("section");
        for(let i=1;i<=10;i++){
            let h1tag=document.createElement('h1');
            let row=`${num} x ${i} = ${num*i}`;
            h1tag.innerText=row;
            Section.appendChild(h1tag);
        }
    }
}