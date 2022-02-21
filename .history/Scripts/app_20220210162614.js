var mseconds = 0;

function formTimer() {
  window.setInterval("updateTime()", 1000);
}

function updateTime() {
  ++mseconds;

  if (mseconds == 3) {
    window.location.href = "./index.html";
  }
}

function start() {
  var submitButtonClick = document.getElementById("submitButton");
  submitButtonClick.addEventListener("click", function (event) {
    event.preventDefault();
    var inputName = document.getElementById("InputName").value;
    var inputEmailAddress = document.getElementById("InputEmail1").value;
    var inputNumber = document.getElementById("InputNumber").value;
    var inputMessage = document.getElementById("InputMessage").value;

    console.log(
      "User Form Input" +
        "\n Name of the User: " +
        inputName +
        "\n Number of the User: " +
        inputNumber +
        "\n Email of the User: " +
        inputEmailAddress +
        "\n Message of the User: " +
        inputMessage
    );
    document.getElementById("InputName").value = "";
    formTimer();
  });
}

window.addEventListener("load", start);
