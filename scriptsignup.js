document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      event.preventDefault(); // Stop form submission
      alert('Passwords do not match. Please try again.');
    }
  });
  