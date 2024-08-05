function validateNumber() {
    const mobile = document.getElementById('mobile').value;
    const mobileError = document.getElementById('mobileError');
    const requiredLength = 10;

    let isValid = true;

    mobileError.textContent = '';
if (!isNumeric(mobile)){
    mobileError.textContent='Mobile number must contains only digits';
    isValid=false;

}  
else if(mobile[0]> '6' && mobile[0] <='9'){
    if(mobile.length !== requiredLength) {
        mobileError.textContent = `Mobile number must be exactly ${requiredLength} digits.`;
        isValid = false;
    }
 
}
    
else{
    mobileError.textContent=`Number Starts between 6 and 9`;
    isValid=false;
}

    return isValid;
}

function isNumeric(value) {
    for (let char of value) {
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}
