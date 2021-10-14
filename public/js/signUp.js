const signUp = async (event) => {
    // event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
        });
        console.log('response', response)

        if (response.ok) {
        document.location.replace('/homepage');
        } else {
        alert('Please enter a valid email address and make sure your password is between 8 and 25 characters long');
        }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUp);