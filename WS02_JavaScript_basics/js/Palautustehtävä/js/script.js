console.log("Hello World!"); alert("Hello World!");

const name = "Miro"; let age = 28; const favoriteAnimal = "Spinosaurus";
console.log("My name is " + name); console.log("I am " + age + " years old."); console.log("My favorite animal is " + favoriteAnimal);

const visitorName = prompt("What is your name?");
console.log("Hello, " + visitorName + "! Welcome to the JavaScript playground!");

const visitorAge = prompt("How old are you?");
if (visitorAge < 18) { console.log("You are under 18."); } else { console.log("You are an adult."); }

function greetUser(name) { console.log("Hello, " + name + "!"); } greetUser(visitorName);

function button() { alert("Thanks for checking this out!"); }