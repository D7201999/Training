function convertNumberToString(){
    let num=parseInt(document.getElementById('num').value);
    let str=String(num);
    document.getElementById('string').innerHTML=`${str}   ${typeof str}`;
}
function convertStringToNumber(){
    let str=document.getElementById('str').value;
    let num=Number(str);
    document.getElementById('number').innerHTML=`${num}   ${typeof num}`;

}
function convertNumberToBoolean(){
    let num=parseInt(document.getElementById('number1').value);
    let bool=Boolean(num);
    document.getElementById('boolean').innerHTML=`${bool} ${typeof bool}`
}
function convertBooleanToString(){
    let bool=document.getElementById('boolean-value').value;
    let str=String(bool==='true');
    document.getElementById('string1').innerHTML=`${str} ${typeof str}`;

}