const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

// Add event listener to toggle dark mode
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeButton.textContent = "☀️ Light Mode";
    } else {
        toggleDarkModeButton.textContent = "🌙 Dark Mode";
    }
});