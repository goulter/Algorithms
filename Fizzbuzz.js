//function to take num as a param, logout every number from 1 to num.
//if divisible by 3 log fizz
//if divisible by 5 log buzz
//if divisible by 3 and 5 log fizzbuzz

function fizzbuzz(num){
    for (let i=1; i<=num; i++){
        if(i % 15 ===0){
            console.log('fizzbuzz');
        } else if(i % 3 === 0){
            console.log('fizz');
        } else if (i % 5 ===0){
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(20);
