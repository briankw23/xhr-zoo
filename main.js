console.log("start of JS", Date.now());

const printToDom = (domString, divId) => {
document.getElementById("zoo").innerHTML = domString;
};

function Xhrload(){
const data = JSON.parse(this.responseText);
console.log("data", data);
domString(data.animals);
};

function Xhrfail(){
    console.log("fail");
}

const domString = (animalArray) => {
    let domString="";
 for (let i = 0; i < animalArray.length; i++) {
        domString += `<div class="animal">`;
      domString += `<h1>${animalArray[i].names}</h1>`;
      domString += `<h3>${animalArray[i].number}</h3>`;
      domString += `<img  class="animal-img" src='${animalArray[i].imageUrl}'>`;
      domString += `<div class="button-container">`;
      domString += `<button>Escaped</button>`
      domString += `</div>`;
      domString += `</div>`;
 }
 printToDom(domString, "zoo");
};

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", Xhrload);
    myRequest.addEventListener("error", Xhrfail);
    myRequest.open("GET", "animals.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};
console.log("start of JS", Date.now());
startApplication();