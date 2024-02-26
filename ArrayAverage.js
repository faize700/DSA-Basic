// Calculate the average of numbers in an array of numbers
// average = sum of element divided by number of elements.
const arrAvg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(arrAvg([1,2,3]));