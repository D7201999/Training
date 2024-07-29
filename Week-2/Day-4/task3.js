function manipulateArray(){
    let inputs=document.getElementById('numbers').value.split(',');
    let inputNumbers=[];
    inputs.forEach(element => {
        let newElement=parseInt(element);
        inputNumbers.push(newElement);
    });
    inputNumbers.push(6);
    let originalArray=inputNumbers.slice(0,inputNumbers.length);
    
    inputNumbers.shift();
    let bool=inputNumbers.includes(3);
    
    let newArray=inputNumbers.slice(2,6);
    newArray.sort((a,b)=>a-b);
    
    let st=newArray.toString();
    document.querySelector('.result').innerHTML=`"${st}"`;
}