function findOppositeNumber(n, inputNumber){
    let b = n/2;
    if (inputNumber < b){
        return inputNumber + b;
    } 
    if (inputNumber >=b){
        return inputNumber - b;
    }
}


function merge2String(string1,string2){
    let value = string1.length - string2.length;
    let newString ="";
    if (value === 0){
        for (let i = 0; i < string1.length;i++){
            newString += string1[i] + string2[i];
        }
    } else if(value > 0){
        for (let i = 0; i < string2.length;i++){
            newString += string1[i] + string2[i];
        }
        newString += string1[string1.length-1];
    } else {
        for (let i = 0; i < string1.length;i++){
            newString += string1[i] + string2[i];
        }
        newString += string2[string2.length-1];
    }
    
    return newString
}
