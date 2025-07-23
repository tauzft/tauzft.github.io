// function for pointer cursor over interaction inputs
document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.login-container input');
    inputs.forEach(function (input) {
        input.addEventListener('mousedown', function () {
            input.style.cursor = 'auto';
        });

        input.addEventListener('blur', function () {
            input.style.cursor = 'pointer';
        });
    });
});

// function to toggle password visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleBtn = document.getElementById("toggleBtn");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show";
    }
}

// function to redirect upon "login" with a little easter egg ;)
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "./letter/letter.html"; 
    });
});