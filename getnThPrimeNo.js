// Print the first 100 prime numbers

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

const getnThPrimeNo = (n) =>{
    const ans = [];
    let num = 2;
    while(ans.length !== n){
        if(isPrime(num)){
            ans.push(num);
        }
        num++;
    }
    return ans;
}

console.log(getnThPrimeNo(10));