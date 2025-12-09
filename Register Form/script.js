document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error fields
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");

    let isValid = true;

    // Reset errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmError.innerHTML = "";

    // Name validation
    if (name === "") {
        nameError.innerHTML = "Name cannot be empty";
        isValid = false;
    }

    // Email validation (basic regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.innerHTML = "Email cannot be empty";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerHTML = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    }

    // Confirm password
    if (confirmPassword === "") {
        confirmError.innerHTML = "Confirm password is required";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmError.innerHTML = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        this.reset();
    }
});
