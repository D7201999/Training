function capitalizeStrings(){
    let inputStrings=document.getElementById('main-string').value.split(" ");
    let newArray=[];
    inputStrings.forEach(element => {
        let newElement=element.toUpperCase();
        newArray.push(newElement);
        
    });
    document.querySelector('.result').innerHTML=newArray;
}