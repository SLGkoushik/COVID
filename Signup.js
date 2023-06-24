// Wrap the code in an event listener to ensure the DOM is loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const errorMessage = document.getElementById('errorMessage');
  
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signupForm.email.value;
      const password = signupForm.password.value;
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signup successful
          const user = userCredential.user;
          console.log('Signup successful:', user);
          // Display success message
          const successMessage = document.getElementById('successMessage');
          successMessage.textContent = 'Successfully signed up!';
          successMessage.style.display = 'block';
          // Redirect to dashboard page
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 2000); // Redirect after 2 seconds
        })
        .catch((error) => {
          // Handle signup error
          const errorCode = error.code;
          const errorMessageText = error.message;
          console.error('Signup error:', errorCode, errorMessageText);
  
          if (errorCode === 'auth/email-already-in-use') {
            // Display error message for existing email
            errorMessage.textContent = 'Email already exists. Please try a different email.';
            errorMessage.style.display = 'block';
          } else {
            // Display generic error message
            errorMessage.textContent = 'An error occurred during signup. Please try again.';
            errorMessage.style.display = 'block';
          }
        });
    });
  });
  
  
  