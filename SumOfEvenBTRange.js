// Calculate the sum of even numbers greater than X and less than Y
function getSumOfEvenNumbers(X,Y){
    let result = 0;
    for (let i = X+1; i < Y; i++) {
        if (i % 2 == 0) {
            result = result + i;
        }
    }
    return result;
}

console.log(getSumOfEvenNumbers(2,10));