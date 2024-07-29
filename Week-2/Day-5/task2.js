function calculateDays(){
    let currentDate=new Date();
    let deadlineDate=new Date(document.getElementById('date').value);
    let time1=deadlineDate.getTime();
    let time2=currentDate.getTime();
    let totalMilliseconds=time1-time2;
    let millsecondsInOneDay=24*60*60*1000;
    let daysRemained=Math.ceil(totalMilliseconds/millsecondsInOneDay);
    document.querySelector('.result').innerHTML=`${daysRemained>0?'Number of days left is'+`${daysRemained}`:"Deadline Expired"}`;

    
}