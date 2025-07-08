const users = [
{ name: "John", age: 25 },
{ name: "Rita", age: 22 },
{ name: "Sam", age: 30 }
];

let body=document.querySelector('body');
let section=document.createElement("section");
for(user of users){
    let divtag=document.createElement("div");
    let h1tag=document.createElement("h1");
    let h2tag=document.createElement("h2");
    h1tag.innerText=`${user.name}`
    h2tag.innerText=`${user.age}`
    divtag.appendChild(h1tag);
    divtag.appendChild(h2tag);
    section.appendChild(divtag);
    divtag.style.border="1px solid green";
}
body.append(section);