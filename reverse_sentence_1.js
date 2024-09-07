//reverse each word in the sentence, but keep the words in order.
//ex: abc def -> cba fed

function reverseSentence(str){
    //split into arrays on spaces
    let array = str.split(' '); //'abc def' -> [abc, def]
    var revArr = [];

    array.forEach(arr => {
        let newArr = arr.split(''); //abc -> [a,b,c]
        let revNewArr = [];
        
        console.log(`newArr ${newArr}`);

        newArr.forEach(ch =>{
            revNewArr.unshift(ch); //a -> [a], b-> [b,a]
        })

        console.log(`revNewArr ${revNewArr}`);
        let revNewStr = revNewArr.join(''); //[b,a] -> ba
        console.log (`revNewStr ${revNewStr}`);
        revArr.push(revNewStr) //ba -> [ba]
    })

    let reversedSentence = revArr.join(' ');//[ba,de] -> ba ed
    console.log(`reversedSentence ${reversedSentence}`);

    return reversedSentence;

}

let reversed = reverseSentence('abc def');
console.log(`reversed ${reversed}`);