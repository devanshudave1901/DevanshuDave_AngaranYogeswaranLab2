//window.addEventListener("load", start, false);

// var seconds = 0;
// function formSubmit(event) {
//   // alert("Form Submitted");
//   window.setInterval("updateTime()", 1000);

//   var inputName = document.forms["Contactform"]["InputName"].value;
//   var input1 = document.getElementById("InputName").value;
//   console.log("Name is " + input1);
// }

// function updateTime() {
//   ++seconds;
//   console.log("time", seconds);
// }
// function start() {
//   var submitButtonClick = document.getElementById("submitButton");
//   submitButtonClick.addEventListener("click", formSubmit, false);
// }

// window.addEventListener("load", start);

function start() {
  var submitButtonClick = document.getElementById("submitButton");
  submitButtonClick.addEventListener("click", function (event) {
    event.preventDefault();
    var input1 = document.getElementById("InputName").value;
    `console.log("Name is " + input1);
  });
}

window.addEventListener("load", start);
