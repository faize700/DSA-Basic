// Create a function that will receive two arrays of numbers as arguments and 
// return an array composed of all the numbers that are either in the first array 
// or second array but not in both

// Example:
// unique([1,2,3,4],[3,4,5,6]) => [1,2,5,6]

const symmetricDifference = (arr, arr2) => {
    
    for (let i = 0; i < arr2.length; i++) {
        let check = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr2[i] == arr[j]) {
                check = false;
                arr.splice(j,1);
            }
        }
        if(check){
            arr.push(arr2[i]);
        }
    }
    return arr;
}


console.log(symmetricDifference([1,2,3,4],[3,4,5,6])); // [1,2,5,6]