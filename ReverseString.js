// Reverse a string
// String in JS are immutable means we cannot modify it, so we need to create a new one.
const reverseStr = (str) =>{
    let ans = "";
    for (let i = str.length - 1; i >= 0; i--) {
        ans = ans + (str[i]);
        
    }
    return ans;
}

console.log(reverseStr("Hello"));