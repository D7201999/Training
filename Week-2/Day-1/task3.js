function incrementValues(){
    let array1=[];
    let inputs=document.getElementById('array').value.split(' ');
    let count=parseInt(document.getElementById('count').value);
    inputs.forEach(input=>{
        array1.push(parseInt(input));
    })
    for(let i=0;i<array1.length;i++){
        array1[i]+=count;
    }
    document.querySelector('.values').innerHTML=`[${array1}]`;
}