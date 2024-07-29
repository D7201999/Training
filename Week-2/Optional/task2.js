function performOperation(a){
    try{
        if(a.trim()===""){
            throw 'Array is Empty';
        }
        else{
            a=a.split(',')
            let inputArray=[];
            a.forEach(element => {
                inputArray.push(parseInt(element)+parseInt(element));
            });
            return inputArray;
        }

    }
    catch(err){
        return err;

    }
}

let value=performOperation(prompt('enter the array inputs separated by commas'));
console.log(value);
