window.addEventListener("load", start, false);

function start() {
  function formSubmit() {
    alert("Form Submitted");
  }

  var submitButtonClick = document.getElementById("submitButton");
  submitButtonClick.addEventListener("click", false);
}
