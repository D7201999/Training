function findPrimeNumbers(){
    let inputs=document.getElementById('numbers').value.split(',');
    let inputNumbers=[];
    inputs.forEach(element => {
        let newElement=parseInt(element);
        inputNumbers.push(newElement);
    });
    let result=[];
    let j;
    for(let i=0;i<inputNumbers.length;i++){
        for(j=2;j<inputNumbers[i];j++){
            if(inputNumbers[i]%j==0){
                break;
            }
        }
        if(j==inputNumbers[i]){
            result.push(inputNumbers[i]);
        }
    }
    if(result.length!==0){
    document.querySelector('.result').innerHTML=`The Prime numbers are [${result}]`;
    }
    else{
        document.querySelector('.result').innerHTML=`There are no prime numbers`;
    }
}