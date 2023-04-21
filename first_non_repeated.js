/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else
If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

const nums6 = [1, 4, 5, 1, 4, 5, 8, 9, 2, 1, 4, 5]
const expected6 = 8


/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    let map = {}
    let int = 0
    for (let i = 0; i < nums.length; i++) { // Setting up a for loop to itterate through nums
        if (!map[nums[i]]) { // an if condition to check if nums[i] is in the map already, and if nums[i] is not we "push" it into the map
            map[nums[i]] = 1;
        }
        else {
            map[nums[i]] += 1;
        }
    }
    for (j=0; j<map.length; j++) { // a new for loop to itterate through the map
        if (map[j] < 2) { // if the key value is odd then we return the key
            return map[nums[j]]
            
        }
    }
    return map
}

console.log(firstNonRepeated(nums1))
console.log(firstNonRepeated(nums2))
console.log(firstNonRepeated(nums3))
console.log(firstNonRepeated(nums4))
console.log(firstNonRepeated(nums5))
console.log(firstNonRepeated(nums6))

/*****************************************************************************/