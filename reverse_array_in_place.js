//reverse an array but you can only use a temp str var, not another array.
function rev_arr_in_place(arr){
    //when the arr length is an even number, there is no middle index.
    //if(arr.length%2===0){
    var temp = '';
    //put the left index at 0 and the right index at the last element.
    var left_index = 0;
    var right_index = arr.length-1;
    console.log(left_index, right_index);

    //example, length is 4. [0,1,2,3]
    /*
    li=0, ri=3 ... 1,2 2,1
    */

    //example, length is 5. [0,1,2,3,4]
    /*
    li=0, ri=4 ... 1,3 2,2. At index 2, we are at the middle index. The middle index doesn't need to be swapped.
    */

    //0123 is the sample arr.
    while (left_index < right_index){ 
        //the complexity is O(n). The swap of the two indices takes 3 moves. 
        //3 moves * (length/2). length/2 because thats how many times it takes til li is not <= ri.
        //length = 4, 6 moves... 10 is 15 20 is 30, 40 is 60. 80 is 120. 
        //double the inputs, double the moves. Linear.
        temp = arr[left_index] //0
        arr[left_index]=arr[right_index];
        arr[right_index]=temp;
        console.log('while');
        left_index++;
        right_index--;
        console.log(left_index, right_index);//04 13 22
    }

    return arr;
    //} 
}

rev_arr = rev_arr_in_place([0,1,2,3,4]);
console.log(rev_arr);