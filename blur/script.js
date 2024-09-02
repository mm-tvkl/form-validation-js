let usernameInput = document.getElementById("username-input");
let usernameText = document.getElementById("username-text");

let passwordInput = document.getElementById("password-input");
let passwordText = document.getElementById("password-text");

let submitButton = document.querySelector(".submit-button");

let usernameFlag = false;
let passwordFlag = false;

// Username input checking validation
usernameInput.addEventListener("blur" , function(event){
    
    if(usernameInput.value.length < 12){
        usernameFlag = false;
        
        // Text
        usernameText.innerHTML = "Username that must be at least 12 characters";
        usernameText.style.color = "#ff6363";

        // Input styles
        usernameInput.classList.add("input-error");

    } else {
        usernameFlag = true;
        
        // Text
        usernameText.innerHTML = "Username is OK!";
        usernameText.style.color = "#4200a5";

        // Input styles
        usernameInput.classList.remove("input-error");
    }

    // disable or enable Submit button
    if(usernameFlag && passwordFlag){
        submitButton.removeAttribute("disabled" , "true");
    } else {
        submitButton.setAttribute("disabled" , "true");
    }
})

// Password input checking validation
passwordInput.addEventListener("blur" , function(event){
    if(passwordInput.value.length < 8){
        passwordFlag = false;
        
        // Text
        passwordText.innerHTML = "Password that must be at least 8 characters";
        passwordText.style.color = "#ff6363";

        // Input styles
        passwordInput.classList.add("input-error");

    } else {
        passwordFlag = true;
        
        // Text
        passwordText.innerHTML = "Password is OK!";
        passwordText.style.color = "#4200a5";

        // Input styles
        passwordInput.classList.remove("input-error");
    }

    // disable or enable Submit button
    if(usernameFlag && passwordFlag){
        submitButton.removeAttribute("disabled" , "true");
    } else {
        submitButton.setAttribute("disabled" , "true");
    }
})

// Submit button input checking validation
submitButton.addEventListener("click" , function(event){ 
    if (usernameFlag && passwordFlag){
        return true;
    } else {
        event.preventDefault();
    }
})