document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector('form');

    // Get the submit button
    const submitButton = form.querySelector('button[type="submit"]');

    // Add event listener for form submission
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form field elements
        const emailInput = form.querySelector('input[type="email"]');
        const demoDateInput = form.querySelector('.date-select input.date');
        const monthSelect = form.querySelector('.date-select select:nth-child(2)');
        const yearSelect = form.querySelector('.date-select select:nth-child(3)');
        const departmentSelect = form.querySelector('select:not(.date-select select)');

        // Validation flag
        let isValid = true;

        // Validate email (basic email validation)
        if (!validateEmail(emailInput.value)) {
            isValid = false;
            setErrorStyle(emailInput);
        } else {
            removeErrorStyle(emailInput);
        }

        // Validate date fields (day, month, year)
        if (demoDateInput.value>31 || !demoDateInput.value) {
            isValid = false;
            setErrorStyle(demoDateInput);
        } else {
            removeErrorStyle(demoDateInput);
        }

        // Validate month selection
        if (monthSelect.value === "Month" || monthSelect.value === "") {
            isValid = false;
            setErrorStyle(monthSelect);
        } else {
            removeErrorStyle(monthSelect);
        }

        // Validate year selection
        if (yearSelect.value === "Year" || yearSelect.value === "") {
            isValid = false;
            setErrorStyle(yearSelect);
        } else {
            removeErrorStyle(yearSelect);
        }

        // Validate department
        if (departmentSelect.value === "Choose from the list" || departmentSelect.value === "") {
            isValid = false;
            setErrorStyle(departmentSelect);
        } else {
            removeErrorStyle(departmentSelect);
        }

        // If any validation fails, show the error message
        if (!isValid) {
            displayErrorMessage("Please fill out all fields correctly");
        } else {
            displaySuccessMessage("Request accepted");
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to apply red border to invalid fields
    function setErrorStyle(element) {
        element.style.border = '2px solid red';
    }

    // Function to remove red border from valid fields
    function removeErrorStyle(element) {
        element.style.border = ''; // Reset border to default
    }

    // Function to display error message
    function displayErrorMessage(message) {
        removeSuccessMessage(); // Remove any previous success message
        let errorMessage = form.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.style.color = 'red';
            form.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    }

    // Function to display success message
    function displaySuccessMessage(message) {
        removeErrorMessage(); // Remove any previous error message
        let successMessage = form.querySelector('.success-message');
        if (!successMessage) {
            successMessage = document.createElement('p');
            successMessage.className = 'success-message';
            successMessage.style.color = 'green';
            form.appendChild(successMessage);
        }
        successMessage.textContent = message;
    }

    // Function to remove error message
    function removeErrorMessage() {
        const errorMessage = form.querySelector('.error-message');
        if (errorMessage) {
            form.removeChild(errorMessage);
        }
    }

    // Function to remove success message
    function removeSuccessMessage() {
        const successMessage = form.querySelector('.success-message');
        if (successMessage) {
            form.removeChild(successMessage);
        }
    }
});


