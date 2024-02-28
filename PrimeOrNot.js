// Create a function that will return a Boolean specifying if a number is prime

const isPrime = (num) => {
    // base condition
    if (num == 2) {
        return true;
    }
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // True</  
  