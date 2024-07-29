function findAverage(){
    let inputs=document.querySelector('.numbers').value.split(' ');
    let arr=[];
    inputs.forEach(element => {
        arr.push(parseInt(element));
        
    });
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg=parseFloat(sum/arr.length);
    document.querySelector('.averageValues').innerText=` The average of above numbers is ${avg}`;
}