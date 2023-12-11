// forgot_password.js
function sendResetLink() {
    // Implement logic to check if the username exists
    var username = document.getElementById("username").value;
    // For simplicity, consider the username "admin" as a valid user
    if (username === "admin") {
      window.location.href = "reset_password.html";
    } else {
      alert("Username not found. Please try again.");
    }
  }