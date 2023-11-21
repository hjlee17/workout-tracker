const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = $('#email-login').val().trim();
    const password = $('#password-login').val().trim();
  
    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email: email, password: password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };
// event handler for the login button
$('#login-btn').click(function(event) {
  loginHandler(event);
});
// event handler for enter key on the last input field
$('#password').on('keyup', function(event) {
  if (event.key === 'Enter') {
    loginHandler(event);
  }
});