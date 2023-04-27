/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 123456789
const expected4 = 9


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if(num < 10){ //sanitation and breakpoint for resursion
        return num;
    }

    let str_num = num.toString(); // convert num into a string call str_num
    let newnum = 0;

    for(let i = 0; i < str_num.length; i++){ // a for loop to itterate through str_num 
        newnum += parseInt(str_num[i]) // adding str_num at i to newnum
    }


    return sumToOneDigit(newnum) // recursion
}

console.log(sumToOneDigit(num1), 'expected:', expected1)
console.log(sumToOneDigit(num2), 'expected:', expected2)
console.log(sumToOneDigit(num3), 'expected:', expected3)
console.log(sumToOneDigit(num4), 'expected:', expected4)



