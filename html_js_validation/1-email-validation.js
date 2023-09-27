// Get references to the form and error message elements
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Function to validate the email format
function validateEmail(email) {
    // Define a regular expression for the standard email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the email matches the regular expression
    if (emailRegex.test(email)) {
        // If the email format is correct, return true
        return true;
    } else {
        // If the email format is incorrect, return false
        return false;
    }
}

// Handle form submission
emailForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Retrieve the email value entered by the user
    const email = emailInput.value;

    // Validate the email format
    if (validateEmail(email)) {
        // Clear any previous error message and allow the form submission
        errorElement.textContent = "";
        emailForm.submit();
    } else {
        // Display an error message and prevent the form submission
        errorElement.textContent = "Please enter a valid email address.";
    }
});
