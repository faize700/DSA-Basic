// Create a function that will return in an array the first “n” prime numbers 
// greater than “p”

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

const getPrimeNo = (n,p) =>{
    const ans = [];
    let num = p+1;
    while (ans.length !== n) {
        if (isPrime(num)) {
            ans.push(num);
        }
        num++;
    }
    return ans;
}

console.log(getPrimeNo(5,10));