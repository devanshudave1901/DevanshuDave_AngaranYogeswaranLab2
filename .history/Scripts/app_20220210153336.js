//window.addEventListener("load", start, false);

function formSubmit() {
  // alert("Form Submitted");

  var inputName = document.forms["Contactform"]["InputName"];
  alert("Hello" + inputName);
}

var submitButtonClick = document.getElementById("submitButton");
submitButtonClick.addEventListener("click", formSubmit, false);
