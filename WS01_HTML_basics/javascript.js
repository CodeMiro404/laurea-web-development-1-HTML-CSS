// 1. When the user clicks a button, show a message about Spinosaurus.
const dinoButton = document.getElementById("dinoButton");

dinoButton.addEventListener("click", function() {
    alert("Spinosaurus was a large theropod dinosaur that lived during the Cretaceous period.");
});

// 2. ID HTML defines the page. The browser creates the DOM, and JavaScript can use the DOM to change the page.
const dinoTitle = document.querySelector("#dinoTitle");

dinoTitle.addEventListener("click", function() {
    dinoTitle.textContent = "Spinosaurus: The Largest Carnivorous Dinosaur";
    dinoTitle.style.color = "green";
});

// 3. MOUSEOVER

const dinoImage = document.querySelector("img");

dinoImage.addEventListener("mouseover", function() {
    console.log("You hovered over the Spinosaurus image!");

});

// 4. Input event.

const dinoInput = document.querySelector("#dinoInput");
const dinoOutput = document.querySelector("#dinoOutput");

dinoInput.addEventListener("input", function() {
    dinoOutput.textContent = dinoInput.value;
});

// dinoInput.addEventListener("focus", function() {
    //console.log("Input is focused.");
//});

//dinoInput.addEventListener("blur", function() {
    //console.log("Input lost focus.");
//});

const dinoForm = document.querySelector("#dinoForm");

dinoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    dinoOutput.textContent = "You submitted: " + dinoInput.value;
    console.log("Form submitted with value: " + dinoInput.value);

});

// Key down demonstration

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
});