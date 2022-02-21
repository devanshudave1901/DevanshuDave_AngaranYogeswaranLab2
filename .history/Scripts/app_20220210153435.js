//window.addEventListener("load", start, false);

function formSubmit() {
  // alert("Form Submitted");

  var inputName = document.forms["Contactform"]["InputName"].value;
  let input1 = document.getElementById("InputName").value;
  alert("Hello" + inputName);
}

var submitButtonClick = document.getElementById("submitButton");
submitButtonClick.addEventListener("click", formSubmit, false);
