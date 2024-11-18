const { number } = require("yargs");

function TwoSum(numArray, Sum){
    //return every pair of numbers in numArray that add up to Sum.
    var numberObject={};
    //fill the object

    numArray.forEach((number)=>{
        numberObject[number]=1;
    })

    const keysArray = Object.keys(numberObject);
    console.log(keysArray);    

    for(let key of Object.keys(numberObject)){
        let index = keysArray.indexOf(key);
        for(let nextKey of Object.keys(numberObject)){
            console.log(`index, keysArray.indexOf(key) ${index},${keysArray.indexOf(key)}`);
            // if(index !== keysArray.indexOf(key)){
                console.log(key,nextKey);
            // }
        }
        
    }

}

TwoSum([1,6,4,5,3,3]);