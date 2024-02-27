// Print the first 10 Fibonacci numbers without recursion
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

const getFibonacciNo = (num) =>{
    let first = 0;
    let second = 1;
    let ans = [first,second];
    for (let i = 0; i < num-2; i++) {
        let nextNum = first + second;
        ans.push(nextNum);
        first = second;
        second = nextNum;
    }
    return ans;
}

console.log(getFibonacciNo(14));

// loop is running less than "num-2" because we have already added two numbers in array before entering.