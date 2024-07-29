function truncateString(){
    let mainString=document.getElementById('main-string').value;
    let maxLength=parseInt(document.getElementById('max-length').value);
    if(mainString.length>=maxLength){
        let addedString="...";
        let subString=mainString.slice(0,maxLength-1);
        subString+=addedString;
        document.querySelector('.truncated-string').innerHTML=` "${subString}"`;
    }
    else{
        document.querySelector('.truncated-string').innerHTML=` "${mainString}"`;
    }
}