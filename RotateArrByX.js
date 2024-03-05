// Rotate an array to the left 1 position
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

const rotateArrLeft = (arr,d) =>{
    const ans = [];
    for (let i = d; i < arr.length; i++) {
        ans.push(arr[i]);
    }
    for (let i = 0; i < d; i++) {
        ans.push(arr[i]);
    }
    return ans;
}

console.log(rotateArrLeft([1,2,3,4,5,6,7],2));