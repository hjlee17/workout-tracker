// Prevents the default form submission behavior to handle the signup process asynchronously
const signupHandler = async (event) => {
  event.preventDefault();

  // Check the ID of the clicked element to determine the input retrieval method
  const isJQueryHandler = event.target.id === 'signup-btn' || event.target.id === 'password-signup';

  // Retrieves the input elements based on the method
  const firstNameInput = isJQueryHandler ? $('#first-name-signup') : document.querySelector('#username-signup');
  const lastNameInput = isJQueryHandler ? $('#last-name-signup') : document.querySelector('#last-name-signup');
const emailInput = isJQueryHandler ? $('#email-signup') : document.querySelector('#email-signup');
const dateOfBirthInput = isJQueryHandler ? $('#date-of-birth-signup') : document.querySelector('#date-of-birth-signup');
  const passwordInput = isJQueryHandler ? $('#password-signup') : document.querySelector('#password-signup');

  // Retrieves and trims the values of the input fields
  const firstName = firstNameInput.val().trim();
  const lastName = lastNameInput.val().trim();
  const email = emailInput.val().trim();
  const dateOfBirth = dateOfBirthInput.val().trim();
  const password = passwordInput.value.trim();

  // Checks if all required fields are filled
  if (!(firstName && lastName && email && password)) {
    alert('Please fill in all required fields.');
    return;
  }

  // Create an object with user data
  const newUserData = {
    first_name: firstName,
    last_name: lastName,
    email,
    date_of_birth: dateOfBirth,
    password,
  };

  console.log('newUserData:', newUserData);

  try {
    // Sends a POST request to the "/api/users" endpoint with user data
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUserData),
      headers: { 'Content-Type': 'application/json' },
    });

    // Checks if the response is successful
    if (response.ok) {
      // Replace with the proper endpoint upon signing in
      document.location.replace('/');
    } else {
      // Implement error handling when the user already exists
      const errorMessage = await response.text();
      console.error(errorMessage);
      alert(`Error: ${errorMessage}\nCheck console for further details.`);
    }
  } catch (error) {
    // Handles errors that occur during the asynchronous operation
    console.error(error);
    alert('An unexpected error occurred. Please try again.');
  }
};

// Event handler for the signup button and enter key on the last input field
$(document).on('click keyup', '#signup-btn, #password-signup', signupHandler);

// Event handler for the sign-up button (assuming it has the ID 'signUp-btn')
$('#signUp-btn').click((event) => {
  signupHandler(event);
});

// Event handler for the submit event on the signup form
document.querySelector('.signup-form').addEventListener('submit', (event) => {
  signupHandler(event);
});