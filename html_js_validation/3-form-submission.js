// Function to generate dynamic input fields based on the selected value
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const numFields = document.getElementById("numFields").value;
    generateInputFields(numFields);

    // Retrieve the dynamically generated input fields
    const inputFields = document.querySelectorAll("#inputContainer input");

    // Check if any field is empty
    let isValid = true;
    for (const inputField of inputFields) {
        if (inputField.value.trim() === "") {
            isValid = false;
            break;
        }
    }

    // Display error message or submit the form
    const errorElement = document.getElementById("error");
    if (!isValid) {
        errorElement.textContent = "Please fill in all fields.";
    } else {
        errorElement.textContent = ""; // Clear any previous error message
        event.target.submit(); // Submit the form
    }
}

// Add event listeners
const form = document.getElementById("dynamicForm");
form.addEventListener("submit", validateForm);

const numFieldsSelect = document.getElementById("numFields");
numFieldsSelect.addEventListener("change", function () {
    generateInputFields(numFieldsSelect.value);
});
