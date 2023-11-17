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
        const response = await fetch ('models/User.js',
        method: "POST",
        body: JSON.stringify(userData),
        headers: {

        }
        )
    }
};