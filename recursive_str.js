/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "12345";
const expected3 = "54321";

const str4 = "reverse a string";
const expected4 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if (str == "")
        return "";
    else
        return reverseStr(str.slice(1)) + str.charAt(0);
}


console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr(str3))
console.log(reverseStr(str4))

/*****************************************************************************/
// slice(indexStart)
// slice(indexStart, indexEnd)

