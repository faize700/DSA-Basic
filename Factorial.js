// calculate of any Number like 10!
const factorial = nums => {
    let ans = 1;
    for (let i = 1; i <= nums; i++) {
        ans = ans * i;
    }
    return ans;
}

console.log(factorial(5)); 