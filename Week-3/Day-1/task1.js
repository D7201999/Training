function validateForm() {
    const userid = document.getElementById('userid').value;
    const useridError = document.getElementById('useridError');
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    const zipcode = document.getElementById('zipcode').value;
    const zipcodeError = document.getElementById('zipcodeError');
    const minLengthUserId = 5;
    const maxLengthUserId = 12;
    const minLengthPassword = 7;
    const maxLengthPassword = 12;
    const specialChars = "!@#$%^&*()_+";
    const sexError = document.getElementById('sexError');
    sexError.textContent = '';
    let isValid = true;

    useridError.textContent = '';
    passwordError.textContent = '';
    nameError.textContent = '';
    zipcodeError.textContent = '';
    const languageError = document.getElementById('languageError');
    languageError.textContent = '';

    if (userid.length < minLengthUserId || userid.length > maxLengthUserId) {
        useridError.textContent = `User ID must be between ${minLengthUserId} and ${maxLengthUserId} characters.`;
        isValid = false;
    }

    if (password.length < minLengthPassword || password.length > maxLengthPassword) {
        passwordError.textContent = `Password must be between ${minLengthPassword} and ${maxLengthPassword} characters.`;
        isValid = false;
    } else {
        let hasUpper = false;
        let hasLower = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (let char of password) {
            if (char >= 'A' && char <= 'Z'){
                 hasUpper = true;
                }

            if (char >= 'a' && char <= 'z'){
                hasLower = true;
            }
            if (char >= '0' && char <= '9'){
                hasDigit = true;
            }
            if (specialChars.includes(char)){
                hasSpecial = true;
            }
        }

        if (!hasUpper) {
            passwordError.textContent += 'Password must include at least one uppercase letter. ';
            isValid = false;
        }
        if (!hasLower) {
            passwordError.textContent += 'Password must include at least one lowercase letter. ';
            isValid = false;
        }
        if (!hasDigit) {
            passwordError.textContent += 'Password must include at least one digit. ';
            isValid = false;
        }
        if (!hasSpecial) {
            passwordError.textContent += 'Password must include at least one special character. ';
            isValid = false;
        }
    }

    let isNameValid = true;
    for (let char of name) {
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
            isNameValid = false;
            break;
        }
    }
    if (!isNameValid) {
        nameError.textContent = 'Name must contain only alphabets.';
        isValid = false;
    }

    let isZipcodeValid = true;
    for (let char of zipcode) {
        if (!(char >= '0' && char <= '9')) {
            isZipcodeValid = false;
            break;
        }
    }
    if (!isZipcodeValid) {
        zipcodeError.textContent = 'Zip Code must be numeric.';
        isValid = false;
    }
    const sexOptions = document.querySelectorAll('input[name="sex"]');
    let isSexSelected = false;
    for (let option of sexOptions) {
        if (option.checked) {
            isSexSelected = true;
            break;
        }
    }
    if (!isSexSelected) {
        sexError.textContent = 'Please select your sex.';
        isValid = false;
    }


    const checkboxes = document.querySelectorAll('input[name="language"]:checked');
    if (checkboxes.length === 0) {
        languageError.textContent = 'Please select at least one language.';
        isValid = false;
    }

    return isValid;
}
