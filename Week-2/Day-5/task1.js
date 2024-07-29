function checkAvaliability(){
    let currentDate=new Date();
    let bookingDate=new Date(document.getElementById('date').value);
    document.querySelector('.result').innerHTML=`${bookingDate>currentDate}`;

    
}