document.addEventListener("DOMContentLoaded", function () {
    showForm("loginForm");
});

function showForm(formId) {
    const forms = document.querySelectorAll(".form");
    forms.forEach(form => form.style.display = "none");

    document.getElementById(formId).style.display = "block";
}

function sendResetEmail() {
    const email = document.getElementById("forgotEmail").value;
    // Add logic to send a reset email (not implemented in this example)
    alert(`Reset email sent to ${email}`);
}

function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;
    
    if (newPassword === confirmNewPassword) {
        // Add logic to reset password (not implemented in this example)
        alert("Password reset successfully");
    } else {
        alert("Passwords do not match");
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Add logic to handle login (not implemented in this example)
    alert("Login logic goes here");
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        // Add logic to handle signup (not implemented in this example)
        alert(`Signup successful for ${username}`);
    } else {
        alert("Passwords do not match");
    }
});
