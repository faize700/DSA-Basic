// Reverse an array

const reverseArr = (arr) =>{
    // const ans = [];
    // for (let i = arr.length; i > 0; i--) {
    //     ans.push(arr[i]);
    // }
    // return ans;
    let s = 0;
    let e = arr.length - 1;
    let temp;
    while(s < e){
        temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
    return arr;
}
console.log(reverseArr([0,1,2,3,4,5,6]));