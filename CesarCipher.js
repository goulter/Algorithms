//cesarCipher
//Shift every letter in the given string by a number.

function cesarCipher(str, shift){
    //Ill start be making this work for one character and then build up to a string.

    //create an array of the alphabet
    const alphaArr = 'abcdef'.split(''); //[a,b,c,d...]
    end=alphaArr.length-1;
    console.log(`end=${end}`);

    //need the index of the originating letter.
    const index = alphaArr.indexOf(str); //a=0, b=1, z=25
    //move forward in the array, starting at the index of the str til we reach the num
    console.log(`index=${index}`);

    //fast exit
    if (shift===0){
        return char;
    }

    let total = index + end;
    console.log(`total=${total}`);

    let newShift = total - shift;
    console.log(`newshift=${newShift}`);

    if (newShift > 0){
        return (alphaArr[newShift-1]);
    }
    

}
    
let answer = cesarCipher('c', 5);
console.log(answer);