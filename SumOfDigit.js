// Calculate the sum of digits of a positive integer number

const getSumOfDigits = (num) =>{
    if(num >= 0){
        let lastdigit;
        let sum = 0;
        while(num > 0){
            lastdigit = (num % 10);
            sum = sum + lastdigit;
            num = Math.trunc(num / 10);
        }
        return sum;
    }
    else{
        return "Number should be positive";
    }
}

console.log(getSumOfDigits(5436));

// Math.trunc() is the method to remove the decimal part of JavaScript'Number.