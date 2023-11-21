const loginFormHandler = async (event) => {
  event.preventDefault();

  // Extract values using jQuery
  const email = $('#email-login').val().trim();
  const password = $('#password-login').val().trim();

  // Validate input
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  const loginData = {
    email: email,
    password: password,
  };

  try {
    // Send the email and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/Home');
    } else {
      // Display a more informative error message
      const errorMessage = await response.text();
      alert(`Failed to log in: ${errorMessage}`);
    }
  } catch (error) {
    // Handle network or other unexpected errors
    console.error('Login failed:', error);
    alert('Failed to log in. Please try again.');
  }
};

// Use jQuery to attach the click event
$('#login-btn').click(loginFormHandler);
