/**Name :
 *    Student 1 - Devanshu Dave(100785733)
 *    Student 2 - Angaran Yogeswaran(100754161)
 * Date Completed : 11/02/2022.
 *
 */

// added a event listener which listens to the load event and calls start function
window.addEventListener("load", start);

// declared variable pageTimer to 0
var pageTimer = 0;
/**
 * Function being made with the name of formTimer which usually call the function every second with the help of setInterval
 */
function formTimer() {
  window.setInterval("updateTime()", 1000);
}

/**
 * updateTime() function being made to update the variable and when variable reaches 3 it redirects to home page
 */
function updateTime() {
  ++pageTimer;

  // if pageTimer equals to 3 it redirects to home page
  if (pageTimer == 3) {
    window.location.href = "./index.html";
  }
}

/**
 * when title is contact us then this function is called to do functionality on that page
 */
function contactPage() {
  //Variable that is used to get the Element of the contactId
  var contactId = document.getElementById("contactId");
  //Setting the innnerHTMl of the contactId to have say contact us and show icon
  contactId.innerHTML = " <i class = 'fa-solid fa-comments'></i> Contact Us";

  // declaring variable which contains the element which has id of productsLink
  var currentLink1 = document.getElementById("productsLink");

  // setting it to empty
  currentLink1.textContent = "";
  // added to the icon on the navbar with the text
  currentLink1.innerHTML = "<i class = 'fa-solid fa-th'></i> Project";

  // declared the variable and getting the element with the help of getElementById To add the Human resources link
  var humanResourcesLink = document.getElementById("humanResources");
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
  // getting element of submit button
  var submitButtonClick = document.getElementById("submitButton");
  // adding event listener when its clicked empty the fields and after 3 seconds redirect to home page along with printing things to console
  submitButtonClick.addEventListener("click", function (event) {
    // we are preventing default so that it leaves the default behavior to refresh pages
    event.preventDefault();
    // declaring variable and getting appropriate values from appropriate fields
    var inputName = document.getElementById("InputName").value;
    var inputEmailAddress = document.getElementById("InputEmail1").value;
    var inputNumber = document.getElementById("InputNumber").value;
    var inputMessage = document.getElementById("InputMessage").value;
    // printing the output to the console
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

    // //Setting the value of Input Name,Email,Number,and Message to blank
    document.getElementById("InputName").value = null;
    document.getElementById("InputEmail1").value = null;
    document.getElementById("InputNumber").value = null;
    document.getElementById("InputMessage").value = null;

    // calling the timer function
    formTimer();
  });
  //Set the background of the page to the background image
  // adding appropriate css style
  document.body.style.backgroundImage = "url('images/bgImage1.jpeg')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.opacity = "0.9";
}
/**
 *Function is call to do functionality on product page when its called
 *
 */
function productPage() {
  //get the element of the projectID
  var projectsHeading = document.getElementById("projectsID");
  //Set the InnnerHtml to show box favicon and Our Projects text
  projectsHeading.innerHTML = " <i class = 'fa-solid fa-box'></i> Our Projects";
  // declaring variable which contains the element which has id of productsLink
  var currentLink1 = document.getElementById("productsLink");

  // setting it to empty
  currentLink1.textContent = "";

  // added to the icon on the navbar with the text
  currentLink1.innerHTML = "<i class = 'fa-solid fa-th'></i> Project";
  //storing element of humanResources id in the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print favicon and Human Resources text
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";

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
  //Set the background of the page to the background image
  // adding appropriate css style
  document.body.style.backgroundImage = "url('images/bgImage1.jpeg')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.opacity = "0.9";
}
/**
 * Function is call to do functionality on service page when its called
 *
 */
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
  // added to the icon on the navbar with the text
  currentLink1.innerHTML = "<i class = 'fa-solid fa-th'></i> Project";
  //Storing the element of the humanResources to the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print icon and Human Resources
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";

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
  //Set the background of the page to the background image
  // adding appropriate css style
  document.body.style.backgroundImage = "url('images/bgImage1.jpeg')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.opacity = "0.9";
}
/**
 * Function is call to do functionality on about page when its called
 *
 */
function aboutPage() {
  //Storing element of aboutId in getHeading
  var getHeading = document.getElementById("aboutId");
  //setting getHeading of innerHTML to print About us and Favicon
  getHeading.innerHTML = "  <i class = 'fa-solid fa-user'></i> About Us";
  //Store element of productsLink in currentLink1 variable
  var currentLink1 = document.getElementById("productsLink");
  //Set textContent of currentLink1 to blank
  currentLink1.textContent = "";
  // added to the icon on the navbar with the text
  currentLink1.innerHTML = "<i class = 'fa-solid fa-th'></i> Project";
  //Storing the element of the humanResources to the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print icons and Human Resources
  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";

  // declaring variables to hold the returned value from getElementById
  var heading1;
  var heading2;
  // getting element by id for  tag to add the appropriate text
  heading1 = document.getElementById("heading1");
  // adding text
  heading1.innerHTML =
    "This is a picture of Angaran. Angaran is a 2nd year student in the Computer Programmer Analyst Program" +
    "at Durham College. His Hobbies include playing sports and watching movies. Here is a link to his resume";
  // getting element by id for  tag to add the appropriate text
  heading2 = document.getElementById("heading2");
  // adding text
  heading2.innerHTML =
    "This is a picture of Devanshu. Devanshu is a second year student in the Durham College " +
    "Computer Programmer Analyst Program. His Hobbies include playing games and programming.";
  //Set the background of the page to the background image
  // adding appropriate css style
  document.body.style.backgroundImage = "url('images/bgImage1.jpeg')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.opacity = "0.9";
}
/**
 * Function is call to do functionality on home page when its called
 *
 */
function homePage() {
  //get the element of the productsLink
  var currentLink1 = document.getElementById("productsLink");
  //Set textContent of currentLink1 to blank
  currentLink1.textContent = "";

  // added to the icon on the navbar with the text
  currentLink1.innerHTML = "<i class = 'fa-solid fa-th'></i> Project";
  //Storing the element of the humanResources to the humanResourcesLink
  var humanResourcesLink = document.getElementById("humanResources");
  //Setting the innnerHTML of the humanResourcesLink to print icons and Human Resources

  humanResourcesLink.innerHTML =
    " <a class='nav-link' href='#'> <i class = 'fa-solid fa-child'></i> Human Resources</a>";
  // declaring variable to hold the returned value from getElementById
  var heading3;
  // getting to element by id and assigning it to variable
  heading3 = document.getElementById("heading3");
  // adding context and icon
  heading3.innerHTML =
    "<i class = 'fa-solid fa-chess'></i> Welcome to our Website <i class = 'fa-solid fa-chess'></i>";
  //Set the background of the page to the background image
  // adding appropriate css style
  document.body.style.backgroundImage = "url('images/bgImage1.jpeg')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.opacity = "0.9";
}
function loginPage() {
  $("body").css("background-image", "url(images/bgImage1.jpeg)");
  $("body").css("background-repeat", "repeat");
  $("body").css("background-opacity", "0.9");
}
function registerPage() {
  // $("#formRegister").;
  $("#ErrorMessage").hide();
  $("#formRegister").submit;
  console.log($("#inputFirstName").val());

  $("body").css("background-image", "url(images/bgImage1.jpeg)");
  $("body").css("background-repeat", "repeat");
  $("body").css("background-opacity", "0.9");
}
/**
 *  start function which contains switch statement on the basis of title it calls the function representing each page
 *
 */
function start() {
  // switch statement making a title as condition
  switch (document.title) {
    // if title is home
    case "Home":
      // calls home page function
      homePage();
      break;
    // if title was Services
    case "Services":
      // call servicePage function
      servicePage();
      break;
    // if title is Products
    case "Products":
      // calls productPage function
      productPage();
      break;
    // if title is Contact Us
    case "Contact Us":
      // calls contactPage function
      contactPage();
      break;
    // if title is About  Us
    case "About Us":
      // calls aboutPage function
      aboutPage();
      break;
    case "Login":
      loginPage();
      break;
    case "Register":
      registerPage();
      break;
  }
}
