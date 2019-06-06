import {validateInput} from './validate.js'
import  {emailRules, passwordRules, repeatPasswordRules} from './config.js'

let inputEmail = document.getElementById("mail");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeatPassword");

inputEmail.addEventListener("change", validateInput(emailRules));
password.addEventListener("change", validateInput(passwordRules));
repeatPassword.addEventListener("change", validateInput(repeatPasswordRules));