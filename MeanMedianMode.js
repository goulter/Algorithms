/*
Mean, median, mode
*/

function average(arr) {
    let avg = 0;
    let sum = 0;
    arr.forEach((number) => {
      sum += number;
    });
    avg = sum / arr.length;
  
    return avg;
  }
  
  function median(arr) {
    arr.sort((a, b) => {
      return a - b;
    });
  
    if (arr.length % 2 === 0) {
      return average([arr[arr.length / 2], arr[arr.length / 2 - 1]]);
    } else {
      console.log("here");
      return arr[Math.floor(arr.length / 2)];
    }
  }
  
  // console.log(median([2, 4, 6, 8, 10]));
  // console.log(median([15, 22, 9, 31, 18]));
  // console.log(median([7, 14, 21, 42, 35, 28]));
  
  function mode(arr) {
    let maximumValue = 0;
    let maximumKey = 0;
    numberCounter = {};
  
    arr.forEach((num) => {
      if (!numberCounter[num]) {
        numberCounter[num] = 1;
      } else {
        numberCounter[num]++;
      }
    });
  
    //different methods for looping through the dict
    //1
    // for(const key of numberCounter){
    //   console.log(key,numberCounter[key]);
    // }
  
    //2
    for (const [key, value] of Object.entries(numberCounter)) {
      if (value > maximumValue) {
        maximumValue = value;
        maximumKey = key;
      }
    }
  
    //BUT, what if there is no mode, all occur the same # of times?
    //something like this:
    const values = Object.values(numberCounter);
    const allSame = values.every(value => value === values[0]);
    if(allSame){
      return ("none")
    }
    
    return maximumKey;
  }
  
  console.log(mode([1, 2, 2, 3]));
  console.log(mode([3, 5, 3, 7, 9]));
  console.log(mode([12, 15, 12, 18, 20]));
  console.log(mode([8, 14, 22, 30, 36]));