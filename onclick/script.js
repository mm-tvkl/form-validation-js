let usernameInput = document.getElementById("username-input");
let usernameText = document.getElementById("username-text");

let passwordInput = document.getElementById("password-input");
let passwordText = document.getElementById("password-text");

let submitButton = document.querySelector(".submit-button");

let usernameFlag = false;
let passwordFlag = false;

submitButton.addEventListener("click" , function(event){

    // Username validation
    if(usernameInput.value.length < 12){
        usernameFlag = false;
    } else {
        usernameFlag = true;
    }

    // Password validation
    if (passwordInput.value.length < 8){
        passwordFlag = false;
    } else {
        passwordFlag = true;
    }

    if (usernameFlag && passwordFlag){
        return true;
    } else {
        event.preventDefault();
        
        if(!usernameFlag){
            usernameInput.classList.add("input-error");
            
            // Username text
            usernameText.innerHTML = "Username that must be at least 12 characters";
            usernameText.style.color = "#ff6363";
        } else {
            // Username text
            usernameText.innerHTML = "Username is OK!";
            usernameText.style.color = "#4200a5";

            usernameInput.classList.remove("input-error");
        }
        
        if(!passwordFlag){
            passwordInput.classList.add("input-error");

            // Password text
            passwordText.innerHTML = "Password that must be at least 8 characters";
            passwordText.style.color = "#ff6363";
        } else {
            // Password text
            passwordText.innerHTML = "Password is OK!";
            passwordText.style.color = "#4200a5";

            passwordInput.classList.remove("input-error");
        }
    }

});
