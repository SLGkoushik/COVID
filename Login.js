document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const signupButton = document.getElementById('signupButton');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log('Logged in:', user);
        // Redirect to the user dashboard page
        window.location.href = 'index.html';
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessageText = error.message;
        console.error('Login error:', errorCode, errorMessageText);

        // Display error message
        errorMessage.textContent = 'Incorrect email or password. Please try again.';
        errorMessage.style.display = 'block';
        // Show the signup button
        signupButton.style.display = 'block'
        
      });
  });

  signupButton.addEventListener('click', () => {
    // Redirect to signup page
    window.location.href = 'signup.html';
  });
});
