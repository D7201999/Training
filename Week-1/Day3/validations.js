function validate(){

    let email=document.getElementById('user-email').value;
    let name=document.getElementById('user-name').value;
    localStorage.setItem('email',email);
    let password=document.getElementById('user-password').value;
    let re_password=document.getElementById('re-enter').value;
    let form =document.getElementById('registration-form');
    if(!email || !name || !password || !re_password){
        return false;
    }
    if (password===re_password){
        localStorage.setItem('password',password);
        document.body.innerHTML=`<div><div><h1>Now you are the member of my Website</h1></div>
        <div><a href='login.html'>Click here to login </a> </div></div>`;
    }
    else{
        document.getElementById('verify').innerHTML=`Please enter the same password entered above`;
    }
    }
    