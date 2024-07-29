function store(){
    let name=document.getElementById('name').value;
    let age=parseInt(document.getElementById('age').value);
    let salary=parseInt(document.getElementById('salary').value);
    let skills=document.getElementById('Skills').value.split(',');
    let person={
        name:name,
        age:age,
        salary:salary,
        skill:skills
    }
    let jsonPerson=JSON.stringify(person);
    document.querySelector('.details').innerText=jsonPerson;

    
}