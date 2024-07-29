function highlightSearchTerm(){
    let mainString=document.getElementById('main-string').value;
    let subString=document.getElementById('sub-string').value;
    if(mainString.includes(subString)){
    let highlightedString=mainString.replaceAll(subString,`*${subString}*`);
    document.querySelector('.highlightedString').innerHTML=highlightedString;
} 
    else{
        document.querySelector('.highlightedString').innerHTML=`There is no substring like "${subString}" in given String "${mainString}" `;
    } 
}