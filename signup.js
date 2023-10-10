import { validatePassword } from "./validation.js";

const signUpForm = document.getElementById("signup");
const fullNameField = signUpForm.elements["fullname"];
const usernameField = signUpForm.elements["username"];
const emailField = signUpForm.elements["email"];
const passwordField = signUpForm.elements["password"];

signUpForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (validatePassword(passwordField)){
    alert("password is strong");
  }

});
