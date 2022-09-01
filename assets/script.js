//Variables
var jumbotronEl = document.querySelector(".jumbotron");
var display3El = document.querySelector(".display-3");
var leadEl = document.querySelector(".lead");
var containerEl = document.querySelector(".container");
var currentDayEl = document.querySelector("#currentDay");
var txt9El = document.querySelector("#txt9");
var btn9El = document.querySelector("#btn9");

//Display the Current Day
currentDayEl.textContent = moment().format("dddd, MMMM Do");

//Save text
function save() {
  console.log(txt9.value);
}

//Listeners
btn9El.addEventListener("click", save);
