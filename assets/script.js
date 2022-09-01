//Variables
var jumbotronEl = document.querySelector(".jumbotron");
var display3El = document.querySelector(".display-3");
var leadEl = document.querySelector(".lead");
var containerEl = document.querySelector(".container");
var currentDayEl = document.querySelector("#currentDay");

//Function: current day
currentDayEl.textContent = moment().format("dddd, MMMM Do");
