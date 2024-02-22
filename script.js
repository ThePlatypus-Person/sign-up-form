const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm');

firstName.addEventListener('input', setSignupButtonStatus);
lastName.addEventListener('input', setSignupButtonStatus);
email.addEventListener('input', setSignupButtonStatus);
phoneNumber.addEventListener('input', setSignupButtonStatus);
passwordInput.addEventListener('input', setSignupButtonStatus);


const confirmMessage = document.querySelector('span.confirm-span');
confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value === confirmPasswordInput.value) {
        confirmMessage.textContent = '';
        confirmPasswordInput.removeAttribute('style');
        setSignupButtonStatus();
    } else {
        confirmMessage.textContent = 'Password does not match';
        confirmPasswordInput.setAttribute('style', 'border-color: var(--red-600);');
        setSignupButtonStatus();
    }
});


const signupBtn = document.querySelector('.create');
function setSignupButtonStatus() {
    const validName = firstName.checkValidity()
        && firstName.value !== '' 
        && firstName !== null
        && lastName.checkValidity()
        && lastName.value !== '' 
        && lastName !== null;

    const validEmail = email.checkValidity() 
        && email.value !== '' 
        && email !== null;

    const validPhone = phoneNumber.checkValidity()
        && phoneNumber.value !== '' 
        && phoneNumber !== null;

    const validPassword = passwordInput.checkValidity()
        && passwordInput.value !== '' 
        && passwordInput.value !== null
        && passwordInput.value === confirmPasswordInput.value;

    if (validName
        && validEmail
        && validPhone
        && validPassword) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
}
