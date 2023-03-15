

// var nums = [1, 2, 3]
// console.log('nums', nums)

// var copy = nums
// console.log('copy', copy)

// copy.push(17)
// console.log('nums', nums)

// console.log('copy', copy)


// var vals = [101, 102]
// console.log('vals', vals)
// foo(vals)
// console.log('vals', vals)

function foo(items) {
    console.log('items', items)
    items.pop()
    console.log('items', items)
    // assign a new array to the local items variable:
    // items = []
}



// var x = 20
// var y = 40

// var res = getSum(x, y)
// console.log('res', res)

// var res = getSum(10, 10)
// console.log('res', res)

function getSum(num1, num2) {
    return num1 + num2
}
