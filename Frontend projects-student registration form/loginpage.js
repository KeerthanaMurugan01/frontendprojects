const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
   });
   loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
   });
   signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
   });

function sign(){
    var fn=document.getElementById("FIRSTNAME").value;
    var ln=document.getElementById("LASTNAME").value;
    var semail=document.getElementById("EMAILID").value;
    var spassword=document.getElementById("PASSWORD").value;
    if(fn =='' && ln =='' && semail =='' && spassword ==''){
       alert('enter the details');
    }
else{
    window.location="login.html";
}}

function checkpasswordandredirect(){
    var email=document.getElementById("loginmail").value;
    var password=document.getElementById("loginpassword").value;
    var storedemail="keerthana@gmail.com";
    var storedpassword="keerthana@123";
    if(email.trim() == '' || password.trim() == ''){
        alert("please enter your emailid and password");
    }
    if((email == storedemail) && (password == storedpassword)){
        alert("login successfull");
    }else{
        alert("enter correct emailid and password");
    }
}

function changePassword() {
     var email = document.getElementById("email").value;
     if(email.trim == ''){
        alert("please enter the email id");
     }
     else{
        window.location.href="Reset password.html";
     }}
 
function checkPassword(){
          let password = document.getElementById("password").value;
          let cnfrmPassword = document.getElementById("cnfrm-password").value;
          console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
          let message = document.getElementById("message");
      
          if(password.length != 0){
              if(password == cnfrmPassword){
                  message.textContent = "Passwords match";
                  message.style.backgroundColor = "#1dcd59";
                  window.location.href="login.html";
              }
              else{
                  message.textContent = "Password don't match";
                  message.style.backgroundColor = "#ff4d4d";
              }
          }
          else{
              alert("Password can't be empty!");
              message.textContent = "";
          }
      }
      