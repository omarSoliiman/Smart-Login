var signUpAnchor = document.querySelector(".signUp");
var signInAnchor = document.querySelector(".signIn");
var signInBtn = document.querySelector(".loginBtn");
var logOutBtn = document.querySelector("#logOutBtnId");
var storedUser = localStorage.getItem("userDataobject");

var userData = {};

signUpAnchor.addEventListener("click", function () {
  document.querySelector("#inputNameId").classList.remove("d-none");
  document.querySelector("#inputNameId").classList.add("d-block");

  document.querySelector(".signUpBtn").classList.remove("d-none");
  document.querySelector(".signInBtn").classList.add("d-none");
  document.querySelector(".loginBtn").classList.add("d-none");
  document.querySelector(".signInText").classList.remove("d-none");
  document.querySelector(".signUpText").classList.add("d-none");

  document.querySelector(".errorMessage").classList.add("d-none");
});

function signUpFun() {
  var emailValue = document.getElementById("inputEmailId").value;
  var passwordValue = document.getElementById("inputPasswordId").value;
  var nameValue = document.getElementById("inputNameId").value;

  if (!emailValue || !passwordValue || !nameValue) {
    document.querySelector(".errorMessage").classList.remove("d-none");
    document.querySelector(".successMessage").classList.add("d-none");
  } else {
    document.querySelector(".successMessage").classList.remove("d-none");
    document.querySelector(".errorMessage").classList.add("d-none");

    var userData = {
      uName: nameValue,
      uEmail: emailValue,
      uPassword: passwordValue,
    };

    localStorage.setItem("userDataobject", JSON.stringify(userData));
    clearInputs();
  }
}

function clearInputs() {
  document.getElementById("inputEmailId").value = "";
  document.getElementById("inputPasswordId").value = "";
  document.getElementById("inputNameId").value = "";
  document.querySelector(".successMessage").classList.remove("d-none");
}

signInAnchor.addEventListener("click", function () {
  document.querySelector("#inputNameId").classList.add("d-none");
  document.querySelector("#inputNameId").classList.remove("d-block");

  document.querySelector(".signInText").classList.add("d-none");
  document.querySelector(".signUpText").classList.remove("d-none");
  document.querySelector(".successMessage").classList.add("d-none");
  document.querySelector(".loginBtn").classList.remove("d-none");
  document.querySelector(".signUpBtn").classList.add("d-none");
  document.querySelector(".errorMessage").classList.add("d-none");
});

// logOut button in the navbar
function loginFun() {
  var emailValue = document.getElementById("inputEmailId").value.trim();
  var passwordValue = document.getElementById("inputPasswordId").value.trim();

  document.querySelector(".errorMessage").classList.add("d-none");
  document.querySelector(".loginError").classList.add("d-none");
  document.querySelector(".successMessage").classList.add("d-none");

  if (!emailValue || !passwordValue) {
    document.querySelector(".errorMessage").classList.remove("d-none");
    return;
  }

  var storedUser = localStorage.getItem("userDataobject");

  if (storedUser) {
    var parsedUser = JSON.parse(storedUser);

    if (
      parsedUser.uEmail === emailValue &&
      parsedUser.uPassword === passwordValue
    ) {
      document.querySelector(".login-inputs").classList.add("d-none");
      document.querySelector(".home-page-content").classList.remove("d-none");

      document.querySelector(
        ".home-page-content h1"
      ).textContent = `Welcome ${parsedUser.uName}`;

      document.querySelector(".successMessage").classList.remove("d-none");
      clearInputs();
    } else {
      document.querySelector(".loginError").classList.remove("d-none");
    }
  } else {
    document.querySelector(".loginError").classList.remove("d-none");
  }
}

logOutBtn.addEventListener("click", function () {
  document.querySelector(".home-page-content").classList.add("d-none");
  document.querySelector(".login-inputs").classList.remove("d-none");
});
