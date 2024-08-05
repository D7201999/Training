function validateCreditCardDetails(){
    let americanNumber=window.document.getElementById('american').value;
    let visaNumber=window.document.getElementById('visa').value;
    let masterNumber=window.document.getElementById('master-card').value;
    let discoverNumber=window.document.getElementById('discover').value;
    let dinnerNumber=window.document.getElementById('dinners').value;
    let jcbNumber=window.document.getElementById('jcb').value;
    let americanError=window.document.getElementById('americanError');
    let visaError=window.document.getElementById('visaError');
    let masterError=window.document.getElementById('masterError');
    let discoverError=window.document.getElementById('discoverError');
    let dinnerError=window.document.getElementById('dinnerError');
    let jcbError=window.document.getElementById('jcbError');
    americanError.textContent='';
    visaError.textContent='';
    masterError.textContent='';
    discoverError.textContent='';
    dinnerError.textContent='';
    jcbError.textContent='';
    let americanReg=/^(34|37)\d{13}$/;
    let visaReg=/^(4)\d{12,15}$/;
    let masterReg=/^(5[1-5])\d{14}$/;
    let discoverReg=/^(6011\d{12}|5\d{14})$/;
    let dinnerReg=/^(30[0-5]\d{11}|36|38\d{12})$/;
    let jcbReg=/^((2131|1800)\d{11}|35\d{14})$/;
    let isValid=true;
    if(!(americanNumber.slice(0,2)==='34' || americanNumber.slice(0,2)==='37')){
        americanError.textContent=`either starts with 34 or 37`;
        isValid=false;
    }
    else if(!americanReg.test(americanNumber)){
        americanError.textContent=`length must be exactly 15`;
        isValid=false;
    }
    if(visaNumber[0]!=='4'){
        visaError.textContent=`must starts with 4`;
        isValid=false;

    }
    else if(!visaReg.test(visaNumber)){
        visaError.textContent=`length must be vary between 13 to 16`;
        isValid=false;
    }
    if(!(masterNumber.slice(0,2)>='51' && masterNumber.slice(0,2)<='55')){
        masterError.textContent=`must starts between 51 to 55`;
        isValid=false;

    }
    else if(!masterReg.test(masterNumber)){
        masterError.textContent=`length must be exactly 16`;
        isValid=false;
    }
    if(discoverNumber[0]==='5' ||discoverNumber.slice(0,4)==='6011' ){
        if(discoverNumber[0]==='5'){
            if(!discoverReg.test(discoverNumber)){
                discoverError.textContent=`length must be exactly 15 if it starts with 5`;
                isValid=false;
            }
        }
        else{
            if(!discoverReg.test(discoverNumber)){
                discoverError.textContent=`length must be exactly 16 if it starts with 6011`;
                isValid=false;
            }
        }
    }
    else{
        discoverError.textContent='either starts with 6011 or 5';
        isValid=false;
    }
    if((dinnerNumber.slice(0,3)>='300' && dinnerNumber.slice(0,3)<='305') || dinnerNumber.slice(0,2)==='36'||dinnerNumber.slice(0,2)==='38'){
        if(dinnerNumber.slice(0,2)==='36' || dinnerNumber.slice(0,2)=='38'){
            if(!dinnerReg.test(dinnerNumber)){
                dinnerError.textContent=`length must be exactly 14 if it starts with either 36 or 38`;
                isValid=false;
            }
        }
        else{
            if(!dinnerReg.test(dinnerNumber)){
                dinnerError.textContent=`length must be exactly 14 if it starts between 300 to 305`;
                isValid=false;
            }
        }
    }
    else{
        dinnerError.textContent='either starts between 300 t0 305,36 or 38';
        isValid=false;
    }
    if(jcbNumber.slice(0,4)==='2131' || jcbNumber.slice(0,4)==='1800' || jcbNumber.slice(0,2)==='35'){
        if(jcbNumber.slice(0,2)==='35'){
            if(!jcbReg.test(jcbNumber)){
                jcbError.textContent=`length must be exactly 16 if it starts with 35`;
                isValid=false;
            }
        }
        else{
            if(!jcbReg.test(jcbNumber)){
                jcbError.textContent=`length must be exactly 15 if it starts with either 2131 or 1800`;
                isValid=false;
            }
        }
    }
    else{
        jcbError.textContent='either starts with 2131 or 1800 or 35';
        isValid=false;
    }
    return isValid;

   
}