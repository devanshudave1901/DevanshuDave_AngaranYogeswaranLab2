window.addEventListener("load", start);

var PageTimer = 0;
// Calling this function ever seo
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
  //Variable that is used to get the Element of the contactId
  var contactId = document.getElementById("contactId");
  //Setting the innnerHTMl of the contactId to have say contact us and show favicon
  contactId.innerHTML = " <i class = 'fa-solid fa-comments'></i> Contact Us";

  var currentLink1 = document.getElementById("productsLink");
  // alert(currentLink1.textContent);
  currentLink1.textContent = "";
  // need to add the icon in js
  // currentLink1.textContent = "<i class='fa-solid fa-th'></i>";
  currentLink1.textContent = "Projects";

  var humanResourcesLink = document.getElementById("humanResources");
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
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
    //Setting the value of Input Name,Email,Number,and Message to blank
    // document.getElementById("InputName").value = "";
    // document.getElementById("InputEmail1").value = "";
    // document.getElementById("InputNumber").value = "";
    // document.getElementById("InputMessage").value = "";

    formTimer();
  });
  //Set the background of the page to the dc logo
  document.body.style.backgroundImage = "url('images/dc logo.jpg')";
}
function productPage() {
  //get the element of the projectID
  var projectsHeading = document.getElementById("projectsID");
  //Set the InnnerHtml to show box favicon and Our Projects text
  projectsHeading.innerHTML = " <i class = 'fa-solid fa-box'></i> Our Projects";

  var currentLink1 = document.getElementById("productsLink");
  // alert(currentLink1.textContent);
  currentLink1.textContent = "";
  // need to add the icon in js
  // currentLink1.textContent = "<i class='fa-solid fa-th'></i>";
  currentLink1.textContent = "Projects";
  //storing element of humanResources id in the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print favicon and Human Resources text
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
  //setting the background image to the dc logo Jpeg
  document.body.style.backgroundImage = "url('images/dc logo.jpg')";
  //Storing the Element of paragraph1 in the paragraph1 variable
  var paragraph1 = document.getElementById("paragraph1");
  //Storing the text in the innerHTML of the paragraph1
  paragraph1.innerHTML =
    "This was one of our first programming assignments in this Durham College Program" +
    " and this was one of the first assignments that we both really enjoyed building with" +
    " in the Python Programming Language.";
  //Storing the Element of paragraph2 in the paragraph2 variable
  var paragraph2 = document.getElementById("paragraph2");
  //Storing the text in the innerHTML of the paragraph2
  paragraph2.innerHTML =
    "This was one assignment that we had to do for our Systems" +
    " Automation class we enjoyed this assignemnt becuase it was great" +
    " to learn about this new technology that we could use for testing" +
    " websites and applications.";
  //Storing the Element of paragraph3 in the paragraph3 variable
  var paragraph3 = document.getElementById("paragraph3");
  //Storing the text in the innerHTML of the paragraph3
  paragraph3.innerHTML =
    "This was our Linux assignment where we had to use packet managers" +
    " to find applications and install them using Command Line prompts in" +
    " the Linux operating system. This was one of our favourites becuase" +
    " it was great to learn about the Linux operating system becuase it" +
    " was new to us.";
}

function servicePage() {
  //Storing the Element of paragraph1 in the paragraph1 variable
  var ServiceHeading = document.getElementById("serviceID");
  //Setting the innerHTML of ServiceHeading to truck favicon and to print Our Services
  ServiceHeading.innerHTML =
    " <i class = 'fa-solid fa-truck'></i> Our Services";
  //Storing the Element of productsLink to currentLink1 variable
  var currentLink1 = document.getElementById("productsLink");
  //Setting the textContent of the currentLink1 to nothing
  currentLink1.textContent = "";
  // need to add the icon in js
  // currentLink1.textContent = "<i class='fa-solid fa-th'></i>";
  currentLink1.textContent = "Projects";
  //Storing the element of the humanResources to the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print favicon and Human Resources
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
  //Set background to dc logo image.
  document.body.style.backgroundImage = "url('images/dc logo.jpg')";
  //Storing the element of paragraph4 to the paragraph4 variable
  var paragraph4 = document.getElementById("paragraph4");
  //storing text in paragraph4 innerHTML
  paragraph4.innerHTML =
    "One of the services that we provide is custom programming for any project:" +
    "that you need for any size whether its for a big company or small company" +
    "with only few people.";
  //Storing the element of paragraph5 to the paragraph5 variable
  var paragraph5 = document.getElementById("paragraph5");
  //Storing text in paragraph5 innerHTML
  paragraph5.innerHTML =
    "Mobile Development is another one of our services that we provide" +
    "because many of our clients need mobile applications for their " +
    "business needs.";
  //Storing the element of paragraph6 to paragraph6 variable
  var paragraph6 = document.getElementById("paragraph6");
  //Storing text in paragraph6 innerHTML
  paragraph6.innerHTML =
    "Web-Development is another one of our major services that we provide" +
    "because alot of our clients enjoy how we build websites and appreciate" +
    "our website design.";
}
function aboutPage() {
  //Storing element of aboutId in getHeading
  var getHeading = document.getElementById("aboutId");
  //setting getHeading of innerHTML to print About us and Favicon
  getHeading.innerHTML = "  <i class = 'fa-solid fa-user'></i> About Us";
  //Store element of productsLink in currentLink1 variable
  var currentLink1 = document.getElementById("productsLink");
  // alert(currentLink1.textContent);
  //Set textContent of currentLink1 to blank
  currentLink1.textContent = "";
  // need to add the icon in js
  // currentLink1.textContent = "<i class='fa-solid fa-th'></i>";
  //set textContent of currentLink1 to projects
  currentLink1.textContent = "Projects";

  var humanResourcesLink = document.getElementById("humanResources");
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
  document.body.style.backgroundImage = "url('images/dc logo.jpg')";
  var heading1;

  var heading2;
  heading1 = document.getElementById("heading1");
  heading1.innerHTML =
    "This is a picture of Angaran. Angaran is a 2nd year student in the Computer Programmer Analyst Program" +
    "at Durham College. His Hobbies include playing sports and watching movies. Here is a link to his resume";

  heading2 = document.getElementById("heading2");
  heading2.innerHTML =
    "This is a picture of Devanshu. Devanshu is a second year student in the Durham College " +
    "Computer Programmer Analyst Program. His Hobbies inlcude playing games and programming.";
}

function homePage() {
  var currentLink1 = document.getElementById("productsLink");

  currentLink1.textContent = "";

  // need to add the icon in js
  // currentLink1.textContent = "<i class='fa-solid fa-th'></i>";
  currentLink1.textContent = "Projects";

  var humanResourcesLink = document.getElementById("humanResources");
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";

  document.body.style.backgroundImage = "url('images/dc logo.jpg')";
  var heading1;

  heading1 = document.getElementById("heading1");
  heading1.innerHTML =
    "<i class = 'fa-solid fa-chess'></i> Welcome to our Website <i class = 'fa-solid fa-chess'></i>";
}
function start() {
  switch (document.title) {
    case "Home":
      homePage();
      break;
    case "Services":
      servicePage();

      break;
    case "Products":
      productPage();
      break;
    case "Contact Us":
      contactPage();
      break;
    case "About Us":
      aboutPage();
      break;
  }
}
