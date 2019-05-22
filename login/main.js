// Mail 
//@ має бути і крапка

// Password
// не менше 8 символів
// одна буква має бути Велика 'А'
// одна цифра


// Mail 
let inputEmail = document.getElementById("mail");
let err = document.getElementById("err");
inputEmail.addEventListener("change", function(e){
    let valueEmail = document.getElementById("mail").value;
    let el = valueEmail.split('');

    if(el.indexOf('@') === -1 && el.indexOf('.') === -1){
        inputEmail.style.border = "1px solid red";
        err.innerText = "your email must have '@' and '.'"
    }else if(el.indexOf('@') === -1){
        inputEmail.style.border = "1px solid red";
        err.innerText = "your email must have '@'"
    }
    else if(el.indexOf('.') === -1){
        inputEmail.style.border = "1px solid red";
        err.innerText = "your email must have '.'"
    }
    else{
        inputEmail.style.border = "1px solid green";
        err.innerText = "requer mail"
        err.style.color = "green"
    }
})

// Password 
// Варіант з event;

let password = document.getElementById("password");
let errPas = document.getElementById("errPas")

password.addEventListener("change", function(e){
    el = e.target.value;
    let cepLetter = /[A-Z]/g;
    let notNum = /[0-9]/g;
    
    if(el.length < 8) {
        e.target.style.border = "1px solid red";
        errPas.innerHTML = "Password must heve more 8 symbols";
    } else if(cepLetter.test(el) === false) {
        e.target.style.border = "1px solid red";
        errPas.innerHTML = "Password mast heve ONE capital letter ";
    }
    else if(notNum.test(el) === false) {
        e.target.style.border = "1px solid red";
        errPas.innerHTML = "Password mast heve ONE or more number ";
    }else {
        e.target.style.border = "1px solid green";
        errPas.innerText = "requer password"
        errPas.style.color = "green"
    }
});


//Verify password
let repeatPassword = document.getElementById("repeatPassword");
let testPas = document.getElementById("testPas")

repeatPassword.addEventListener("change", function(e){
    
    if(password.value !== e.target.value){
        testPas.innerText = "Repeat verify password"
        e.target.style.border = "1px solid red";
    }else{
        testPas.innerText = "Great !"
        testPas.style.color = "green";
        repeatPassword.style.border = "1px solid green"
    }

})