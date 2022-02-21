window.addEventListener("load", start, false);

function start() {
  var submitButtonClick = document.getElementById("submitButton");
  submitButtonClick.addEventListener(
    "click",
    function () {
      alert("Button Clicked");
    },
    false
  );
}
