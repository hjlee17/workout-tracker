const logout = async () => {
  try {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/');
    } else {
      // If there's an issue with logging out, display an error message
      const errorMessage = await response.text();
      alert(`Logout failed: ${response.statusText}\n${errorMessage}`);
    }
  } catch (error) {
    // Handle unexpected errors
    console.error('An error occurred during logout:', error);
    alert('Failed to log out. Please try again.');
  }
};

// Add the event listener only if the element with ID 'logout' exists
const logoutButton = document.querySelector('#logout');
if (logoutButton) {
  logoutButton.addEventListener('click', logout);
}
