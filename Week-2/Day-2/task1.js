function countVowels(e){
    let input=document.getElementById('count').value; 
    let count=0;
    for(let i=0;i<input.length;i++){
        if(input[i]==='a' || input[i]==='e'|| input[i]==='i' || input[i]==='o' || input[i]=='u' || input[i]=='A' || input[i]=='E' || input[i]==='I' || input[i]==='O' || input[i]==='U'){
            count+=1;
        }
    }
    document.querySelector('.count').innerHTML=`<h3>The given String Contains ${count} number of Vowels</h3>`;
}