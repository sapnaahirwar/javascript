"use strict"
function registration(){
    let nam = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let mobile = document.querySelector('.mobile').value;
    let password = document.querySelector('.password').value;
    let cpassword = document.querySelector('.cnfrm').value;

    if(nam === ""){
        window.alert("please enter your name");
        document.querySelector('.name').focus();
        return false;
    }
    else if(email === ""){
        window.alert("please enter your email");
        document.querySelector('.email').focus();
        return false;
    }
    else if(!email.includes("@")){
        window.alert("please include @ in email field");
        document.querySelector('.email').focus();
        return false;
    }
    else if(!email.includes('.com')){
        window.alert("please enter valid email")
        document.querySelector('.email').focus();
        return false;
    }
    else if(mobile === ""){
        window.alert("please enter your mobile number");
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(mobile.length !== 10){
        window.alert("mobile number should be 10 digit")
        document.querySelector('.mobile').focus();
        return false;
    }
    else if(isNaN(mobile)){
        window.alert("mobile number should be digit only");
        document.querySelector('mobile').focus();
        return false;
    }
    else if(password === ""){
        window.alert("please enter your password");
        document.querySelector('.password').focus();
        return false;
    }
    else if(!(password.match(/[1234567890]/) && password.match(/[qwertyuiopasdfghjklzxcvbnm]/) && password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
    && password.match(/[!@#$%^&*]/))){
window.alert("please use strong password");
document.querySelector('.password').focus();
return false;
}
    else if(cpassword === ""){
        window.alert("please enter your cnfrm password");
        document.querySelector('.cnfrm').focus();
        return false;
    }
}