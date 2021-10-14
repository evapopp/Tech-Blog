const logIn = async (event) => {
    event.preventDefault();
  
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
        alert("Oops! Your email or password did not work! Make sure you have signed up first and then try again!");
      }
    }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', logIn);

