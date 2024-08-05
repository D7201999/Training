function validateIpAddress() {
    const ipAddress = document.getElementById('ipAddress').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const ipPattern = /^(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)$/;
    
    const ipOctets = ipAddress.split('.');
    if (ipOctets.length !== 4) {
        errorMessage.textContent = 'IP address must have 4 octets.';
        return false;
    }
    
    for (const octet of ipOctets) {
        if (!/^\d+$/.test(octet)) {
            errorMessage.textContent = 'IP address must contain only digits.';
            return false;
        }
        const octetNumber = parseInt(octet, 10);
        if (octetNumber < 0 || octetNumber > 255) {
            errorMessage.textContent = 'Each octet must be between 0 and 255.';
            return false;
        }
    }
    
    if (!ipPattern.test(ipAddress)) {
        errorMessage.textContent = 'Invalid IP address format.';
        return false;
    }
    
    errorMessage.textContent = '';
    return true;
}
