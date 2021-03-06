/**Name :
 *    Student 1 - Devanshu Dave(100785733)
 *    Student 2 - Angaran Yogeswaran(100754161)
 * Date Completed : 27/02/2022.
 *
 */

class User {
  constructor(
    firstName,
    lastName,
    userName,
    emailAddress,
    password,
    confirmPassword
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
(() => {
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
    projectsHeading.innerHTML =
      " <i class = 'fa-solid fa-box'></i> Our Projects";
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
   /**
   * Function is call to do functionality on login page when its called
   *
   */
  function loginPage() {
    //Sets Background image
    $("body").css("background-image", "url(images/bgImage1.jpeg)");

    $("body").css("background-repeat", "repeat");

    $("body").css("background-opacity", "0.9");
    //When the login submission button is clicked this functionality is called
    $("#loginSubmit").click((e) => {
      //Preventing the default feedback
      e.preventDefault();
      //Storing the value of userNameInput1 in the user1input value  
      let user1input = $("#usernameInput1").val();

      //Adding the user1input to the nav bar as well as the user-check logo
      $("#navUserName").prepend(

       "   " +  "<i class='fa-solid fa-user-check'></i>" + user1input + "    "
      );
      //Replace the login text with Log Out
      $(" <a class='nav-link' href='./login.html'> <i class='fa-solid fa-user'></i>  Log Out</a>").replaceAll("#loginName");
    });
  }
  //resets the form
  function resets() {
    this.form.reset();
  }
   /**Function is call to do functionality on register page when its called
   */ 
  function registerPage() {
    // using hide method to hide the div element from the page.
    $("#ErrorMessage").hide();
    //validation variables for register button.
    var firstNameValidity;
    var lastNameValidity;
    var varEmailNameValidity;
    var varinputPasswordValidity;
    var varConfirmValidity;

    // using change method so whenever something changes in the text box the block of code implements
    $("#inputFirstName").change((e) => {
      // using if and else to validate the minimum length of the first name.
      var firstName = $("#inputFirstName").val();
      if($("#inputFirstName").val().length == null)
      {
        $("#ErrorMessage").html(
          "First Name cannot be empty"
        );

        firstNameValidity = false;
        //Show the Errormessage  
        $("#ErrorMessage").show();
        //Turn background of firstname input field red if there is error
        $("#inputFirstName").css("background-color","red")
        //Turn border of firstname input field red if there is error
        $("#inputFirstName").css("border-color","red")
      }
      // if the length og the firstName is less than 2
      // store "First name should be greater than 2"
      // in the html of the element with the ID ErrorMessage
      else if ($("#inputFirstName").val().length < 2) {
        $("#ErrorMessage").html(
          "First Name should be greater than 2 or not empty"
        );
        //Set validity variable to false
        firstNameValidity = false;
        //Show the Errormessage  
        $("#ErrorMessage").show();
        //Turn background of firstname input field red if there is error
        $("#inputFirstName").css("background-color","red")
        //Turn border of firstname input field red if there is error
        $("#inputFirstName").css("border-color","red")
        //Otherwise hide the ErrorMessage
      }

      else {
        //Hiding the ErrorMessage
        $("#ErrorMessage").hide();
        //Turn background color of firstname input field white if error goes away
        $("#inputFirstName").css("background-color","white")
        //Turn Border color of firstname input field green if error goes away.
        $("#inputFirstName").css("border-color","green")
        //Setting Validity variable to true.
        firstNameValidity = true;
      }
    });
    //Whenever the last name block is changed we
    //use the change method to implement the
    //block of code
    $("#inputLastName").change((e) =>  {
      //Storing the value of the inputLastName in the lastName Variable
      var lastName = $("#inputLastName").val();
      //If the value of the text in LastName box is less than 2 then
      //store the text "Last Name should be greater than 2" in
      // the html of the element with that ID.
      if ($("#inputLastName").val().length < 2) {
        $("#ErrorMessage").html(" Last Name should be greater than 2 ");
        //setting validity variable to false
        lastNameValidity = false;
        //Set validateBool to false
        validateBool = false;
        //Show the ErrorMessage
        $("#ErrorMessage").show();
        //Turn background of lastname input field red if there is error
        $("#inputLastName").css("background-color","red")
        //Turn border of lastname input field red if there is error
        $("#inputLastName").css("border-color","red")
        //Hide the ErrorMessage
      } else {
        $("#ErrorMessage").hide();
        //Turn background color of lastname input field white if error goes away
        $("#inputLastName").css("background-color","white")
        //Turn Border color of lastname input field green if error goes away.
        $("#inputLastName").css("border-color","green")
        lastNameValidity = true;
      }
    });
    //Whenever thie inputEmail is changed
    $("#inputEmail").change((e) =>  {
      //store the value in the regex variable
      let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\..0-9a-zA-Z]+)\.([a-zA-Z]){1,8}$/;
      // store the value of email block in the emailValue variable
      let emailValue = $("#inputEmail").val();
      //if the value doesnt match
      if (!regex.test(emailValue)) {
        //if value of inputEmail is less than 8
        if ($("#inputEmail").val().length < 8) {
          // set the value of the ErrorMessage to Email is not valid
          $("#ErrorMessage").html(" Email is not Valid ");
          varEmailNameValidity = false;
          //Show the ErrorMessage
          $("#ErrorMessage").show();
          //Turn background of email input field red if there is error
          $("#inputEmail").css("background-color","red")
          //Turn Border color of email input field green if error goes away.
          $("#inputEmail").css("border-color","red")
        }
        //Other wise hide the ErrorMessage
      } else {
        $("#ErrorMessage").hide();
        //Turn background color of email input field white if error goes away
        $("#inputEmail").css("background-color","white")
        //Turn Border color of email input field green if error goes away.
        $("#inputEmail").css("border-color","green")
        //Set validity variable to true.
        lastNameValidity = true;

      }
    });
    //if the text of the input password is changed then
    //store this valye in the passwordInputRegisterValue
    $("#inputPassword").keydown(function() {
      var passwordInputRegister = $("#inputPassword").val();
      //If the passwordInputRegister is less than 6
      if (passwordInputRegister.length < 6 || passwordInputRegister.length == 0  ) {
        //Set the value of this element to say
        //Password Field must be above 6 characters.
        //Too small Password
        $("#ErrorMessage").html(
          "Password Field must be above 6 characters. Too small Password"
        );
        varinputPasswordValidity = false;
        //Show ErrorMessage
        $("#ErrorMessage").show();
        //Turn background of password input field red if there is error
        $("#inputPassword").css("background-color","red")
        //Turn border of password input field red if there is error  
        $("#inputPassword").css("border-color","red")
      } else {
        //Hide ErroMessage
        $("#ErrorMessage").hide();
        //Turn background color of password input field white if error goes away
        $("#inputPassword").css("background-color","white")
        //Turn Border color of password input field green if error goes away.
        $("#inputPassword").css("border-color","green")
        varinputPasswordValidity = true;
      }
    });
    //If the text in the inputConfirmPassword is changed
    //store this value in the confirmPasswordInputRegister variable
    $("#inputConfirmPassword").change((e) =>  {
      var confirmPasswordInputRegister = $("#inputConfirmPassword").val();
      //if the length of the text in the variable is less than 6 than
      //output the errorMessage which says the Confirm Password Field must be
      //above 6 characters. 
      if (confirmPasswordInputRegister.length < 6) {
        $("#ErrorMessage").html(
          "Confirm Password Field must be above 6 characters. Too small Password"
        );
        //set validity variable to false
        varConfirmValidity = false;
        //Show the error message
        $("#ErrorMessage").show();
        //Turn background color of confirm password input field red if there is error        
        $("#inputConfirmPassword").css("background-color","red")
        //Turn border of confirm password input field red if there is error
        $("#inputConfirmPassword").css("border-color","red")
      } else if (
        // if input password and confirm password doesn't match show error message
        $("#inputPassword").val() != $("#inputConfirmPassword").val()
      ) {
        //validity variable set to false
        varConfirmValidity = false;
        $("#ErrorMessage").html("Password and Confirm Password Should match");
        $("#ErrorMessage").show();
        //Turn background color of confirm password input field red if there is error        
        $("#inputConfirmPassword").css("background-color","red")
        //Turn border of confirm password input field red if there is error
        $("#inputConfirmPassword").css("border-color","red")
        //Other wise hide the ErrorMessage
      } else {
        //validity variable set to true
        varConfirmValidity = true;
        $("#ErrorMessage").hide();
        //Turn background color of confirm password input field white if error goes away
        $("#inputConfirmPassword").css("background-color","white")
        //Turn Border color of confirm password input field green if error goes away.
        $("#inputConfirmPassword").css("border-color","green")
      }
    });
    //When the registerButton is clicked preventDefault feedback
    $("#registerButton").click((e) => {
      e.preventDefault();
      // console.log(User(firstName, lastName, emailValue, passwordInputRegister));
      //getting all the values of all variables and saving it in const inputFormR
      //if there is not error then execute the block
      if (

        firstNameValidity == true &&

        lastNameValidity == true &&

        varEmailNameValidity == true &&

        varinputPasswordValidity == true ||

        varConfirmValidity == true

      ) {

      const inputFormR = new User(
        $("#inputFirstName").val(),
        $("#inputLastName").val(),
        $("#inputFirstName").val().toLowerCase() +
          "." +
          $("#inputLastName").val().toLowerCase(),
        $("#inputEmail").val(),
        $("#inputPassword").val(),
        $("#inputConfirmPassword").val()

      );
      console.log(inputFormR);
      //Setting value of variables to null
      document.getElementById("inputFirstName").value = null;
      document.getElementById("inputLastName").value = null;
      document.getElementById("inputEmail").value = null;
      document.getElementById("inputPassword").value = null;
      document.getElementById("inputConfirmPassword").value = null;
    }
    });
    //Change Background image and opacity of the background
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
})();
