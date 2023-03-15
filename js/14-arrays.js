

// Write a program that generate 10 random numbers,
// push into array and print it

// ex1()

function ex1() {

    var nums = []
    for (var i = 0; i < 10; i++) {
        var randNum = getRandomInt(1, 10)
        // console.log('randNum', randNum)
        nums.push(randNum)
        // nums[i] = randNum
    }
    console.log('nums', nums)
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

/////////////////////////////////////////////////////////////////

// Use split & join:
// var names = 'Muki,Puki,Shuki'.split(',')
// console.log('names', names)

// var str = names.join('*')
// console.log('str', str)

//////////////////////////////////////////////////////////////////

// Use slice to copy an array:

// var nums = [0, 7, 9, 6]
// console.log('nums', nums)

// var numsCopy = nums.slice()
// console.log('numsCopy', numsCopy)

// nums.push(19)

// numsCopy[0] = 200

// console.log('numsCopy', numsCopy)
// console.log('nums', nums)

////////////////////////////////////////////////////////////////////

// Write the function: isItemExist(items, item)

// var res = isItemExist([1, 2, 3], 2)
// console.log('res', res)

function isItemExist(items, item) {

    return items.includes(item)
}

function isItemExist1(items, item) {

    // if (items.indexOf(item) !== -1) {
    //     return true
    // } else {
    //     return false
    // }

    return items.indexOf(item) !== -1
}

function isItemExist2(items, item) {

    for (var i = 0; i < items.length; i++) {
        var currItem = items[i]
        if (currItem === item) return true
    }
    return false
}
