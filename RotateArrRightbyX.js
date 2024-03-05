// Rotate an array to the right 1 position
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 6,7,1,2,3,4,5

const  rotateArrRight = (arr, d) => {
    const ans = [];
    for (let i = arr.length - d; i < arr.length; i++) {
        ans.push(arr[i]);
    }
    for (let i = 0; i < arr.length - d; i++) {
        ans.push(arr[i]);
    }
    return ans;
}
console.log(rotateArrRight([1, 2, 3, 4,  5, 6, 7],  2));