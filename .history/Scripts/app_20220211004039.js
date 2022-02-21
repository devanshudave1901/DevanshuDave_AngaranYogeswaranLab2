window.addEventListener("load", start);

var PageTimer = 0;

function formTimer() {
  window.setInterval("updateTime()", 1000);
}

function updateTime() {
  ++PageTimer;

  if (PageTimer == 3) {
    window.location.href = "./index.html";
  }
}
function contactPage() {
  // alert(document.title);

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
    document.getElementById("InputEmail1").value = "";
    document.getElementById("InputNumber").value = "";
    document.getElementById("InputMessage").value = "";

    formTimer();
  });
}
function productPage() {
  alert("hi");
}
function start() {
  switch (document.title) {
    case "Services":
      alert("about us");
      break;
    case "":
    case "Contact Us":
      contactPage();
      break;
  }
}

function start1() {
  // alert("Hello");
}
