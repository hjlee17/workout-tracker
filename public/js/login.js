const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = $('#email-login').val().trim();
    const password = $('#password-login').val().trim();

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };
document 
.querySelector('#login-btn')
.addEventListener('submit', loginFormHandler);
