// Create a function that will merge two arrays and return the result as a new 
// array
const mergeTwoArr = (arr,arr2) => {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        ans.push(arr2[i]);
    }
    return ans;
}

console.log(mergeTwoArr([1,2,3],[4,5,6])); 