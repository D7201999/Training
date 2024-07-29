function countOccurrences(){
    let mainString=document.getElementById('main-string').value;
    let subString=document.getElementById('sub-string').value;
    let newString=mainString.split(subString);
    console.log(newString);
    document.querySelector('.count').innerHTML=`The substring "${subString}" present <u>${newString.length-1}</u>  times in "${mainString}" `;
}