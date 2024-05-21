document.body.style.backgroundColor="black";
document.body.style.color="white";
const h1change=document.getElementById('h1Element').innerText='DOM CONCEPT';
document.getElementById('h1Element').style.color="blue";
document.getElementById('h1Element').style.textAlign="center"
console.log(h1change);

const h5Ele=document.getElementById('sub-heading').style.color="pink";
document.getElementById('sub-heading').style.fontSize="30px";
console.log(h5Ele);
                       
document.querySelector("button").innerText="Read Here";
document.querySelector("button").style.color="white";
document.querySelector("button").style.backgroundColor="red";
document.querySelector("button").style.padding="10px";
document.querySelector("button").style.fontSize="17px";
document.querySelector("button").style.borderRadius="9px";
document.querySelector("button").style.border="none";

document.getElementById("Ent").style.color="red";
document.getElementById("Ent").style.listStyleType="none";

document.querySelector("li").style.fontSize="20px";

let nodeList = document.querySelectorAll("p");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "Beige";
  nodeList[i].style.fontSize = "20px";
  nodeList[i].style.color="black";
}

let nodeList2 = document.querySelectorAll("li");
for (let i = 0; i < 5; i++) {
    if(i%2==0){
        nodeList2[i].style.color = "green";
        nodeList2[i].style.fontSize = "20px";
        nodeList2[i].style.listStyleType="None";
    }
    else{
        nodeList2[i].style.color = "skyblue";
        nodeList2[i].style.fontSize = "20px";
        nodeList2[i].style.listStyleType="None";
    }

}

document.getElementById("h3Element").style.color="brown";