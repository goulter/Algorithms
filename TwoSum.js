const { array } = require("yargs");

function TwoSum(numArray, Sum){
    //return every pair of numbers in numArray that add up to Sum.
    var arrayHash={};
    var indexAnswerArray=[]; //indexes of the 2 numbers in array that add up to Sum.
    var valueAnswerArray=[]; //values of the 2 numbers in array that add up to Sum.
    //fill the object

    //to know if a number in the array adds with another number in the array to get Sum, subtract number from Sum.
    numArray.forEach((number, index) => {
        let counterPart = Sum - number;
        if (counterPart in arrayHash){ //this means a key exists in the hash that adds with the number to form the sum.
            console.log('yes ', index, arrayHash[counterPart])
            indexAnswerArray.push([index, arrayHash[counterPart]]);
            valueAnswerArray.push(numArray[index],numArray[arrayHash[counterPart]])
        }
        arrayHash[number]=index; //regardless, put the number and the index into the hash so we know what we have and use it for the next comparison.
    })
    return {indexAnswerArray, valueAnswerArray};
    //THIS IS O(N) COMPLEXITY SINCE TGHE SEARCH IS IN A HASH. NO DOUBLE LOOPS ETC.
}

let answer = TwoSum([4,5,3,2],6);
console.log(answer);