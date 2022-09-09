//Variables
var jumbotronEl = $(".jumbotron");
var display3El = $(".display-3");
var leadEl = $(".lead");
var containerEl = $(".container");
var currentDayEl = $("#currentDay");

//Current Day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Functions
function getTime() {
 var time = moment().hours()

 for (var i = 9; i <= 17; i++) {
  var timeEl = document.getElementById(i);
  var locVal = localStorage.getItem(i);
  timeEl.textContent = locVal;

  if (i == time) {
   $(timeEl).addClass("present");
  } else if (i > time) {
   $(timeEl).addClass("future");
   localStorage.setItem(i, timeEl.value);
  } else {
   $(timeEl).addClass("past");
  }
 }
}

// Listeners
$(document).ready(getTime());
$("#btn9").on("click", getTime);
$("#btn10").on("click", getTime);
$("#btn11").on("click", getTime);
$("#btn12").on("click", getTime);
$("#btn13").on("click", getTime);
$("#btn14").on("click", getTime);
$("#btn15").on("click", getTime);
$("#btn16").on("click", getTime);
$("#btn17").on("click", getTime);

//Run
getTime();
