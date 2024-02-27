// Create a function that receives an array of numbers as argument and returns an 
// array containing only the positive numbers

const getPositiveNumbers = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getPositiveNumbers([1,5,-9,8,-4]));