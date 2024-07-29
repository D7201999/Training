function findEvenIndex(){
    let inputs=document.getElementById('count').value.split(' ');
    let arr=[];
    inputs.forEach(element => {
        arr.push(parseInt(element));
        
    });
    let i=0;
    do {
        if(arr[i]%2===0){
            document.querySelector('.count').innerHTML=`The first even value found at index ${i}`;
            return;
        }
        i+=1;
    } while (i<arr.length);
    document.querySelector('.count').innerHTML=`The given array does not contains any even Values`;

}

