function validate(){
    let local_email=localStorage.getItem('email');
    let local_password=localStorage.getItem('password');
    let new_email=document.getElementById('user-email').value;
    let new_password=document.getElementById('user-password').value;
    if(new_email && new_password){
    if(local_email===new_email){
        document.getElementById('email-verify').innerHTML='';
        if(local_password===new_password){
        document.body.innerHTML=`<div><h1 class='sucess'>Login Successfull</h1></div>
        ${
        setTimeout(()=>{
            window.location.href='../day4.html';

        },2000)
        
        
        
        }`;
    }
    else{
        document.getElementById('pass-verify').innerHTML=`
        wrong password entered`;
    }

}
else{
    document.getElementById('email-verify').innerHTML=`
    wrong email entered`;
}
}
}