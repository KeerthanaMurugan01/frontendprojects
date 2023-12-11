// reset_password.js
function resetPassword() {
    // Implement logic to reset password
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (newPassword === confirmPassword) {
      // For simplicity, you might want to send the new password to the server here
      // and perform the necessary update. For this example, we just redirect to the login page.
      alert("Password reset successful. Redirecting to login page.");
      window.location.href = "login.html";
    } else {
      alert("Passwords do not match. Please try again.");
    }
  }