document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim().toLowerCase();
    const errorMessage = document.getElementById('error-message');

    // Check for valid usernames and redirect accordingly
    if (username === 'ruksana') {
        window.location.href = 'portfolio.html';
    } else if (username === 'arshad') {
        window.location.href = 'portfolio2.html';
    } 
    else if (username === 'rajitha') {
        window.location.href = 'portfolio3.html';
    } else {
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Invalid Username! Try again.';
    }
});
