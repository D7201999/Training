function validateForm() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const passwordPattern = /^[A-Za-z]\w{6,15}$/;
    
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must be between 7 to 16 characters and start with a letter. It can contain letters, numbers, and underscores.';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}
function validate1Form() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
    
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase, and one lowercase letter.';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}
function validate2Form() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const passwordPattern = /^(?=.*\d)(?=.*\W).{7,15}$/;
    
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must be between 7 to 15 characters and contain at least one numeric digit and a special character.';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}
function validate3Form() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=\W).{8,15}$/;
    
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must be between 8 to 15 characters and contain at least one numeric digit,one uppercase,one lowercase letter and one special character.';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}



