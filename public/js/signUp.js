// Prevents the default form submission behavior to handle the signup process asynchronously
const signupFormhandler = async (event) => {
  event.preventDefault();
}

// Retrieves the input elements for username and password from the DOM
const usernameImput = document.querySelector("#username-signup");
const passwordImput = document.querySelector('#password-signup');

// Retrieves and trims the values of username and password
const username = usernameImput.value.trim();
const password = passwordImput.value.trim();

// Checks if both username and password are provided
if (username && password) {
  // Creates an object with user data
  const userData = {
      username,
      password,
  }; 

  try {
      // Sends a POST request to the "/api/users" endpoint with user data
      const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/json",
          },
      });

      // Checks if the response is successful
      if (response.ok) {
          // Redirects to the dashboard upon successful signup
          document.location.replace("/dashboard");
      } else {
          // Displays an error message if signup fails
          const errorMessage = await response.text();
          alert(`Signup failed: ${response.statusText}\n${errorMessage}`);
      }
  } catch (error) {
      // Handles errors that occur during the asynchronous operation
      console.error(`An error occurred: ${error.message}`);
  }
}; 

// Adds a submit event listener to the signup form, triggering the signupFormhandler function
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormhandler);
