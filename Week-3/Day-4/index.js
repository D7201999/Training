function validateEmailId(){
    let email=document.getElementById('email').value;
    let emailError=document.getElementById('emailError');
    emailError.textContent='';
    let personalPattern=/^(?!\.)(?!.*\.{2})[a-zA-Z0-9\._-]{1,64}(?<!\.)$/;
    let domainPattern=/^[^.](?!.*\.{2})[a-zA-Z0-9\-\.]{1,250}(\.com|\.org|\.net|\.in|\.us|\.info)$/;
    let splitEmail=email.split('@');
    console.log(splitEmail);
    if(splitEmail[0]===''){
        emailError.textContent=`the email should not start with @`;
        return false;
    }
    else if(splitEmail.length===1){
        emailError.textContent=`@ is not present`;
        return false;
    }
    else if(personalPattern.test(splitEmail[0]) && domainPattern.test(splitEmail[1])){
        return true;
    }
    else{
        emailError.textContent='Invalid email';
        return false;

    }

}