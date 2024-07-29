function getObjectProperty(a,b){
    try{
        if(a==='null' || a==='undefined' || a.trim()===""){
            throw 'Object is null or Undefined';
        }
        let object=JSON.parse(localStorage.getItem(a));
        return object[b];
    }
    catch(err){
        return err;
    }

}
let person={
    name:prompt('enter the name of the person'),
    age:parseInt(prompt('enter the age of the person'))
};
person=JSON.stringify(person);
localStorage.setItem('person',person);
let propertyValue=getObjectProperty(prompt('enter the object'),prompt('enter the key to get the object value'));
console.log(propertyValue);
