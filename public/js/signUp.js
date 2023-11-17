const signupFormhandler = async (event) => {
    event.preventDefault();
}

const usernameImput = document.querySelector("#username-signup");
const passwordImput = document.querySelector('#password-signup');

const username = usernameImput.value.trim();
const password = passwordImput.value.trim();


if (username && password) {
    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        const errorMessage = await response.text();
        alert(`Signup failed: ${response.statusText}\n${errorMessage}`);
      }
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
}; 

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormhandler);