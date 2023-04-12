/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) { // Setting up a for loop to itterate through nums
        if (!map[nums[i]]) { // an if condition to check if nums[i] is in the map already, and if nums[i] is not we "push" it into the map
            map[nums[i]] = 1;
        }
        else{ // an else if condition for when nums[i] is already in the map, if so we add 1 to the key value of nums[i]
            map[nums[i]] += 1;
        }
    }
    for(j in map){ // a new for loop to itterate through the map
        if(map[j] % 2 == 1){ // if the key value is odd then we return the key
            return j
        }

    }
}

console.log(oddOccurrencesInArray(nums1),"expected:", expected1)
console.log(oddOccurrencesInArray(nums2),"expected:", expected2)
console.log(oddOccurrencesInArray(nums3),"expected:", expected3)
console.log(oddOccurrencesInArray(nums4),"expected:", expected4)
/*****************************************************************************/
