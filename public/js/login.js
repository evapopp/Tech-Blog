const logIn = async (event) => {
    // event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const login = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (login.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert("Please enter a valid email, and a password at least 8 characters long");
      }
    }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', logIn);

