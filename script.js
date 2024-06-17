document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const output = document.getElementById('output');
    const nameInput = document.getElementById('name');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Perform validation
        if (nameInput.value.trim() === '') {
            showError('Please enter a name.');
            return;
        }

        // Clear any previous error
        clearError();

        // Process the form input
        const name = nameInput.value.trim();
        displayMessage(name);
    });

    function displayMessage(name) {
        output.innerHTML = `<p>Hello, <strong>${name}</strong>!</p>`;
    }

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.id = 'error-msg';
        errorDiv.textContent = message;
        form.insertBefore(errorDiv, form.childNodes[2]); // Insert error message before the button
    }

    function clearError() {
        const errorDiv = document.getElementById('error-msg');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
});
