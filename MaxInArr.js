// Find the maximum number in an array of numbers

const getMax = (arr) =>{
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([1,5,9,7,5,3,0,1]));//Expected output