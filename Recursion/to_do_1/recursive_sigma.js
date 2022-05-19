// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

console.log(rSigma(25))