//reverse each word in the sentence, but keep the words in order.
//ex: abc def -> cba fed

function reverseSentence(str){
    //split into arrays on spaces
    let array = str.split(' '); //'abc def' -> [abc, def]
    let reverseArr = [];
    var revArr = [];

    array.forEach(arr => {
        let newArr = arr.split(''); //abc -> [a,b,c]
        let revStr = '';
        
        /*
        let revNewArr = [];
        console.log(newArr);
        newArr.forEach(ch =>{
            revNewArr.unshift(ch);
        })
        console.log(revNewArr);
        let revNewStr = revNewArr.join('');
        console.log (revNewStr);
        reverseArr.push(revNewStr);
        */
       for (let i = newArr.length-1; i >= 0; i--){
        revStr += newArr[i];
       }
       revArr.push(revStr);
    })

    console.log(revArr);
    let reversedSentence = revArr.join(' ');
    console.log(reverseArr);
    //reversedSentence  = reverseArr.join(' ');

    return reversedSentence;

}

let reversed = reverseSentence('abc def');
console.log(reversed);