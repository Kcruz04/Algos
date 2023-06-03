/**
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<1){
        return 0
    }

    const sequence = []

    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == 1) {
            sequence.push(1)
        } else {
            nextNum = sequence[i - 1] + sequence[i - 2]
            sequence.push(nextNum)
        }
    }

    return sequence[sequence.length - 1]
}

console.log(climbStairs(3))

/**********************************************/

// if (n <1) {
//     return 0
// }

// const sequence = []

// for (let i = 0; i <= n; i++) {
//     if (i == 0 || i == 1) {
//         sequence.push(1)
//     } else {
//         nextNum = sequence[i - 1] + sequence[i - 2]
//         sequence.push(nextNum)
//     }
// }

// return sequence[sequence.length - 1]
