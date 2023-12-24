// Script to change the place name every 0.2 seconds
const placeNames = ["USA", "India", "Germany", "France", "Russia"];
let currentIndex = 0;
const placeNameElement = document.getElementById("placeName");

setInterval(() => {
    placeNameElement.textContent = placeNames[currentIndex];
    currentIndex = (currentIndex + 1) % placeNames.length;
}, 200);

// Function to handle booking
function bookNow() {
    // Validate form fields
    if (validateForm()) {
        alert("Booking successful!");
        resetForm();
    }
}

// Function to validate the form
function validateForm() {
    // Get form elements
    const destination = document.getElementById("destination");
    const persons = document.getElementById("persons");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const description = document.getElementById("description");

    // Check if all fields are filled
    if (
        destination.value.trim() === "" ||
        persons.value.trim() === "" ||
        startDate.value.trim() === "" ||
        endDate.value.trim() === "" ||
        description.value.trim() === ""
    ) {
        alert("Please fill in all the fields.");
        return false;
    }

    // Validate start date (should be a future date)
    const today = new Date();
    const selectedStartDate = new Date(startDate.value);
    if (selectedStartDate <= today) {
        alert("Please select a future date for the Start Date.");
        return false;
    }

    // Validate end date (should be greater than start date)
    const selectedEndDate = new Date(endDate.value);
    if (selectedEndDate <= selectedStartDate) {
        alert("End Date should be greater than the Start Date.");
        return false;
    }

    // Additional validation logic can be added here if needed

    return true;
}

// Function to reset the form fields
function resetForm() {
    document.getElementById("bookingForm").reset();
}

// Function to handle opening the register modal
function openRegisterModal() {
    $('#registerModal').modal('show');
}

// Bind the function to the register button click event
$('.register-button').click(openRegisterModal);

// ... Existing code ...


// Function to handle opening the login page (you can implement the logic for page redirection)
function openLoginPage() {
}

// Function to handle opening the login modal
function openLoginModal() {
    $('#loginModal').modal('show');
}

// Bind the function to the login button click event
$('#loginButton').click(openLoginModal);

// Function to close login modal and open register page
function closeLoginModalAndOpenRegister() {
    $('#loginModal').modal('hide');

    // Ensure the modal backdrop is removed
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    // Trigger a hidden.bs.modal event to reset the modal state
    $('#loginModal').on('hidden.bs.modal', function (e) {
        // Remove the event listener to prevent multiple bindings
        $(this).off('hidden.bs.modal');

        // Open the register modal
        openRegisterModal();
    });
}


// Function to close register modal and open login page
function closeRegisterModalAndOpenLogin() {
    $('#registerModal').modal('hide');
    openLoginModal();
}

// Function to validate the register form
function validateRegisterForm() {
    // Get form elements
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const dob = document.getElementById("dob");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Validate Full Name
    if (fullName.value.trim() === "") {
        alert("Please enter your Full Name.");
        return false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Contact
    const contactRegex = /^\d{10}$/; // Assumes a 10-digit contact number
    if (!contactRegex.test(contact.value.trim())) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // Validate Date of Birth
    const dobDate = new Date(dob.value);
    const currentDate = new Date();
    if (dobDate >= currentDate) {
        alert("Please enter a valid Date of Birth.");
        return false;
    }

    // Validate Password
    if (password.value.trim() === "") {
        alert("Please enter a password.");
        return false;
    }

    // Validate Confirm Password
    if (confirmPassword.value.trim() === "") {
        alert("Please confirm your password.");
        return false;
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please enter the same password in both fields.");
        return false;
    }

    // Display registration successful message
    alert("Registration Successful!");

    // Return true to submit the form
    return true;
}

// Function to validate the login form
function validateLoginForm() {
    // Get form elements
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Password
    if (loginPassword.value.trim() === "") {
        alert("Please enter your password.");
        return false;
    }

    // Display login successful message (for demonstration purposes)
    alert("Login Successful!");

    // Return true to submit the form
    return true;
}

