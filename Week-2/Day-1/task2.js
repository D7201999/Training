function validateRegistrationData(){
    let name=document.getElementById('name').value;
    let age=parseInt(document.getElementById('age').value);
    if(name && age>=18){
    document.querySelector('.details').innerHTML="True";
    }
    else{
        document.querySelector('.details').innerHTML="False";
    }
    
}
