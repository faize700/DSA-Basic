// Create a function that will find the nth Fibonacci number using recursion
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

const getNthFib = (n) =>{
    // base condition
    if (n == 1) {
        return 0;
    }
    else if (n == 2){
        return 1;
    }
    let first = 0;
    let second = 1;
    let ans = [first,second];
    for (let i = 0; i < n-2; i++) {
        nextEle = first + second;
        ans.push(nextEle);
        first = second;
        second = nextEle;
    }  
    return ans[n-1]; 
}

console.log(getNthFib(7));

// loop is running less than "num-2" because we have already added two numbers in array before entering.

// why I am returning ans[n-1] because in javaScript array index starts from 0 and not 1 so to get nth Fibonacci number in the array we need to substract the n by 1.