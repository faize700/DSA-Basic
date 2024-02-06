// calculate the sum of no from X to Y
const sum = (x,y) =>{
    let ans = 0;
    for (let i = x; i <= y; i++) {
        ans = ans + i;
    }
    return ans;
}

console.log(sum(1,5));