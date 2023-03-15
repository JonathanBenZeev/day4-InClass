
// loopOverArray()

function loopOverArray() {
    var scores = [67, 73, 82, 48]
    console.log('scores', scores)
    var sum = 0
    for (var i = 0; i < scores.length; i++) {
        console.log('i', i)
        console.log('scores[i]', scores[i])
        sum += scores[i]
    }
    var avg = sum / scores.length // 67.5
    console.log('avg', avg)

}


var nums = [4, 7, 1, 2]
console.log('nums', nums)

// nums.push(17)
// console.log('nums', nums)

// nums.push(100, 200, 300)
// console.log('nums', nums)

// nums.pop()
// console.log('nums', nums)

// nums.pop()
// console.log('nums', nums)

// nums.unshift(17, 19)
// console.log('nums', nums)

// nums.shift()
// console.log('nums', nums)

// nums.splice(1, 1)
// console.log('nums', nums)

// nums.splice(1, 1, 70)
// console.log('nums', nums)

// nums.splice(2, 0, 100, 200, 300)
// console.log('nums', nums)

