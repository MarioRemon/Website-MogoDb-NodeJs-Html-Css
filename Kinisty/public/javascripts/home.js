const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
var username = document.forms["form"]["username"];
var pass = document.forms["form"]["password"];
var username_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");

togglePassword.addEventListener("click", function (e) {
// toggle the type attribute
const type =
password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);
// toggle the eye slash icon
this.classList.toggle("fa-eye-slash");
});

function validated() {
if (username.value.length < 5) {
username.style.border = "1px solid red";
username_error.style.display = "block";
username.focus();
return false;
}
if (password.value.length < 1) {
password.style.border = "1px solid red";
pass_error.style.display = "block";
password.focus();
return false;
}
}
function username_Verify() {
if (username.value.length >= 6) {
username.style.border = "1px solid silver";
username_error.style.display = "none";
return true;
}
}
function pass_Verify() {
if (password.value.length >= 6) {
password.style.border = "1px solid silver";
pass_error.style.display = "none";
return true;
}
}



// loginPopup

document.querySelector("#show-login").addEventListener("click",function(){
document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
document.querySelector(".popup").classList.remove("active");

});





