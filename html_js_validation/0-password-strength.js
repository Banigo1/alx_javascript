// Get references to the form and error message elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Function to validate the password
function validatePassword(password) {
    // Define regular expressions for the criteria
    const lengthRegex = /.{8,}/;                 // At least 8 characters
    const uppercaseRegex = /[A-Z]/;             // At least one uppercase letter
    const lowercaseRegex = /[a-z]/;             // At least one lowercase letter
    const digitRegex = /\d/;                    // At least one digit
    const specialCharRegex = /[!@#$%^&*]/;      // At least one special character

    // Check each criterion
    if (!lengthRegex.test(password)) {
        return "Password must be at least 8 characters long.";
    }
    if (!uppercaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!digitRegex.test(password)) {
        return "Password must contain at least one numeric digit.";
    }
    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*).";
    }

    // If all criteria are met, return null (no error message)
    return null;
}

// Handle form submission
passwordForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Retrieve the password value entered by the user
    const password = passwordInput.value;

    // Validate the password
    const errorMessage = validatePassword(password);

    // Display the error message or submit the form
    if (errorMessage) {
        // Display the error message if validation fails
        errorElement.textContent = errorMessage;
    } else {
        // Clear any previous error message and allow the form submission
        errorElement.textContent = "";
        passwordForm.submit();
    }
});
