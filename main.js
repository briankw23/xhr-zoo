console.log("start of JS", Date.now());

const printToDom = (domString, divId) => {
document.getElementById("zoo").innerHTML = domString;
};

function Xhrload(){
const data = JSON.parse(this.responseText);
console.log("data", data);
domString(data.animals);
addEscapedEventlistener();
};

function Xhrfail(){
    console.log("fail");
}

const domString = (animalArray) => {
    let domString="";
 for (let i = 0; i < animalArray.length; i++) {
    console.log(animalArray[i].isCarnivor);
    if (animalArray[i].isCarnivor){
        domString += `<div class="animal carnivore">`;
    } else {
        domString += `<div class="animal vegetable">`;
    }
    domString += `<h1>${animalArray[i].names}</h1>`;
    domString += `<h3>${animalArray[i].number}</h3>`;
    domString += `<img  class="animal-image" src='${animalArray[i].imageUrl}'>`;
    domString += `<div class="button-container">`;
    domString += `<button class="escaped">Escaped</button>`
    domString += `</div>`;
    domString += `</div>`;
}
 printToDom(domString, "zoo");
};
const addEscapedEventlistener = () =>{
    const escapedButtons = document.getElementsByClassName("escaped");
    for (let i = 0; i < escapedButtons.length; i++) {
         escapedButtons[i].addEventListener("click", animalEscaped);
    }
};
const animalEscaped = (e) =>{
    const badAnimalButtonContainer = e.target.parentNode;
    showCarnivores();
    showVegetables();
    showFoundButton(badAnimalButtonContainer);
};
const showFoundButton = buttonContainer => {
    buttonContainer.innerHTML = `<button id="found">Found</button>`;
    initializeFoundButton();
};

const initializeFoundButton = () => {
    const foundButton = document.getElementById("found");
    foundButton.addEventListener("click", () =>{
        const animals = document.getElementsByClassName("animal");
        for (let m = 0; m < animals.length; m++) {
            animals[m].children[3].innerHTML =`<button class="escaped">Escaped</button>`;
            animals[m].classList.remove('red');
            animals[m].classList.remove('green');
        }
        addEscapedEventlistener();
    });

};
const showCarnivores = () => {
    const carnivores = document.getElementsByClassName("carnivore");
    for (let j = 0; j < carnivores.length; j++) {
        carnivores[j].children[3].innerHTML = "";
        carnivores[j].classList.add('red');
    }
};
const intialEatmeButtons = () =>{
    const eatMeButtons = document.getElementsByClassName("eat-me");
    for (let n = 0; n < eatMeButtons.length; n++) {
         eatMeButtons[n].addEventListener("click", itsAlreadyBeenEaten);
    }
};
const itsAlreadyBeenEaten = (e) => {
    const currentNumber = e.target.parentNode.parentNode.children[1].innerHTML;
    const newNumber =currentNumber*1 -1;
    e.target.parentNode.parentNode.children[1].innerHTML = newNumber;
};

const showVegetables = () => {
    const vegetable = document.getElementsByClassName("vegetable");
    for (let k = 0; k < vegetable.length; k++) {
        vegetable[k].children[3].innerHTML = `<button class="eat-me">EAT ME!!!</button>`;
        vegetable[k].classList.add('green');
    }
    intialEatmeButtons();
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
  