document.getElementById('toggleButton').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

document.getElementById('passwordField').addEventListener('input', function() {
    const errorMessage = document.getElementById('errorMessage');
    if (this.value.length > 5) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Password must be more than 5 characters';
        errorMessage.style.display = 'block';
    }
});

document.getElementById('startButton').addEventListener('click', function() {
    const username = document.getElementById('usernameField').value;
    const password = document.getElementById('passwordField').value;

    // Define the correct password
    const correctPassword = 'glztravel';  

    if (password === correctPassword) {
      
        window.location.href = '/home'; 
    } else {
        // Show error message if the password is incorrect
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Incorrect password';
        errorMessage.style.display = 'block';
    }
});
