// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = $(".saveBtn");

var textArea = $('.description');
var date = $('#currentDay');
var time = $('#currentTime');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // DONE: Add code to display the current date in the header of the page.
});

function readDescriptionFromStorage(){
  var text = localStorage.getItem('text');

  if (text) {
    text = JSON.parse(text);
  } else {
    text = [];
  }
  return text;
}

function saveDescriptionToStorage(text){
  localStorage.setItem('text', JSON.stringify(text))
}

function handleDescriptionSave(event) {
  console.log($(event.currentTarget).siblings('.description').val())
  // var description = event.currentTarget;
  // var newDescription = {
  //   Input: description,
  // }
  // var text = readDescriptionFromStorage();
  // text.push(newDescription);
  saveDescriptionToStorage($(event.currentTarget).siblings('.description').val());
}

function displayDate(){
var todaysDate = dayjs().format('MMM DD, YYYY [at]');
date.text(todaysDate);
};

function displayTime() {
var todaysTime = dayjs().format('hh:mm:ss a');
time.text(todaysTime);
}

// function displayValue(){
//   textArea.empty();


// }

saveButton.on('click', handleDescriptionSave);

// displayValue();
displayDate();
displayTime();
setInterval(displayTime, 1000);