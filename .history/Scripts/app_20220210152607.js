window.addEventListener("load", start, false);

function start() {
  function formSubmit() {
    alert("Form Submitted");

    var inputName = document.getElementById("InputName");
  }

  var submitButtonClick = document.getElementById("submitButton");
  submitButtonClick.addEventListener("click", formSubmit, false);
}
