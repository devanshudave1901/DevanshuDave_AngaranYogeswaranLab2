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
  });
}

window.addEventListener("load", start);
