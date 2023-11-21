const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('Hello')
     const email = $('#email-login').val().trim();
     const password = $('#password-login').val().trim();
    console.log(email,password);
    const loginData = {
      email: email,
      password: password,
    };

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };

$('#login-btn').click(function(event) {
  loginFormHandler(event);
});
