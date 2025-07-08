const InputChange=(e)=>{

  const Input=document.getElementById("text-tab");
 
  Input.value=e.target.value;
 
}


const submitHandler=()=>{
    console.log("Running...")
    const Input=document.getElementById("text-tab");
    if(Input.value%2===0){
        alert("Even");
    }
    else{
        alert("ODD");
    }

}