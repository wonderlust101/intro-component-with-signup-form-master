const signupForm = document.getElementById('signup-form');
const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

/**
 * Purpose: Handles the form submission event, validates all inputs, and prevents submission if any validation fails.
 * Parameters: Event object (e) - The submit event triggered by the form.
 * Return: None
 */
signupForm.addEventListener('submit', e => {

    console.log('submitted')

    let success;


    success = checkInput(firstNameInput, firstNameInput.value === '');
    success = checkInput(lastNameInput, lastNameInput.value === '');
    success = checkInput(emailInput, emailInput.value === '' || !emailInput.value.includes('@')); // ONLY CHECK IF @ EXIST, NOT A ROBUST EMAIL CHECK
    success = checkInput(passwordInput, passwordInput.value === '');

    if ( !success) {
        e.preventDefault();
    }
})

/**
 * Purpose: Validates a given input field and updates its visual state based on the condition.
 * Parameters:
 *  - element: The input element being validated.
 *  - condition: A boolean condition that determines if the input is invalid.
 * Return: Boolean - Returns false if the input is invalid, true otherwise.
 */
function checkInput(element, condition) {
    if (condition) {
        setElementState(element, true);
        return false;
    }

    setElementState(element, false);
    return true;
}

/**
 * Purpose: Updates the visual state of the input element based on whether an error is present.
 * Parameters:
 *  - element: The input element being updated.
 *  - isError: A boolean indicating whether the input is in an error state.
 * Return: None
 */
function setElementState(element, isError) {
    const errorIcon = element.nextElementSibling;
    const statusMessage = errorIcon?.nextElementSibling;

    if (isError) {
        element.classList.add('text-input__field--error');
        element.classList.remove('text-input__field--success');
        if (errorIcon) errorIcon.style.display = 'block';
        if (statusMessage) statusMessage.style.display = 'block';
    } else {
        element.classList.remove('text-input__field--error');
        element.classList.add('text-input__field--success');
        if (errorIcon) errorIcon.style.display = 'none';
        if (statusMessage) statusMessage.style.display = 'none';
    }
}