//harmless ransom note
/*
Object as a hash table
2 params, a note (as a string) and magazine text (as a string).
If a give you the note, can you create that note from the magazine text? Each time a word appears in the note, 
it must also appear at least the same number of times in the magazine text.
*/

function harmlessRandomNote(note, magazine){
    /*string.split(<what character to split the string on>) returns an array
    "one two three".split(" ") returns ["one", "two", "three"]
    */

    //step 1, use split to create an array out of each collection of strings.
    noteArray = note.split(" ");
    magazineArray = magazine.split(" ");

    //step 2, create an object where each element in the array is a key and the number of times it appears in the array is value.
    magazineObject = {};

    magazineArray.forEach(word => { //for every word in the array
        //if the word doesn't exist in the object, create that word in the object as a key and set its value to 0.
        if(!magazineObject[word]) {
            magazineObject[word] = 0;
        }
        //after the first if runs, the word now is a key in the object and we can start counting now many times that word appears in the magazine array as the value.
        magazineObject[word]++;
    });

    /*can we write the note with the words and count of those words in the object?
    For each element in the noteArray, find if its in the object. 
    If its not in the object, or you don't have enough of that word (value <= 0) you can't write the note.
    If it IS in the object, decrements the value (count) of the value (word) and move onto the next element in the array.
    */
  
    /*for (let i = 0; i < noteArray.length; i++){
        if(!magazineObject[noteArray[i]] || magazineObject[noteArray[i]] === 0){
            console.log('false');
            return (false);
        } else {
            console.log('true');
            magazineObject[noteArray[i]]--;
        }
    }

    console.log(magazineObject);
    return (true);*/
    
    //the above works, but another implemenation is:

    let possible = true;
    noteArray.forEach(word =>{
        if(!magazineObject[word]||magazineObject[word]===0){
            possible = false;
        } else {
            magazineObject[word]--;
        }
    })
    return (possible);
}

result = (harmlessRandomNote('one one two three', 'one one two'));
console.log(result);