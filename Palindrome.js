//Is palindrome. Is it spelled the same way forwards and backwards?
function isPalindrome(str){
 let archivedArray = str.split(""); //keep the original to compare later
 let stringArray = str.split(""); //the arrayed string that we can mutate to create a reversed array.
 let reversedStringArray = [];

 //This has linear O(n) complexity

//reverse the stringArray into another array.
//pop removes the last element of an array.

stringArray.forEach(char =>{
    reversedStringArray.unshift(char);
});

for (let i = 0; i < stringArray.length; i++){
    if (stringArray[i]!==reversedStringArray[i]){
        return false;
    }
}

return true;

//I can also do it this way. Compare the front and back of the string to the front/back reversed.
//tacocat -> tac o cat
//taccat -> tac cat
//reverse the first (tac becomes cat), then compare cat and cat.

//do we have a center char?
/*
if (str.length%2===0){
    let even=true;
} else {
    let even=false;
}
*/



}

// isPalindrome('tacocat');
console.log(isPalindrome('taccat'));