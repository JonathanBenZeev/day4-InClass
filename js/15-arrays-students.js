// We need to store data about students, we can use two arrays:

var studentNames = ['Popo', 'Momo', 'Lolo']
console.log('studentNames', studentNames)
var studentGrades = [90, 54, 100]
console.log('studentGrades', studentGrades)

// Write the functions printStudentsGrades()

// printStudentsGrades()

function printStudentsGrades() {

    for (var i = 0; i < studentGrades.length; i++) {
        // console.log('i', i)
        var currGrade = studentGrades[i]
        // console.log('currGrade', currGrade)
        var currName = studentNames[i]
        // console.log('currName', currName)
        console.log(currName + ' got: ' + currGrade)
        // console.log(studentNames[i] + ' got: ' + studentGrades[i])
    }
}


// Write the function addStudent() that prompts for details

// addStudent()
// addStudent()

function addStudent() {

    var name = prompt('Name?')
    var grade = +prompt('Grade?')

    studentNames.push(name)
    studentGrades.push(grade)

    console.log('studentNames', studentNames)
    console.log('studentGrades', studentGrades)
}


// Write the function printBestStudentName()

printBestStudentName()

function printBestStudentName() {

    var bestStudentGrade = 0

    for (var i = 0; i < studentGrades.length; i++) {
        var currGrade = studentGrades[i]
        // console.log('currGrade', currGrade)
        if (currGrade > bestStudentGrade) {
            bestStudentGrade = currGrade
        }
    }

    console.log('bestStudentGrade', bestStudentGrade)
    var bestStudentIdx = studentGrades.indexOf(bestStudentGrade)
    // console.log('bestStudentIdx', bestStudentIdx)
    var bestStudentName = studentNames[bestStudentIdx]
    // console.log('bestStudentName', bestStudentName)
    console.log(bestStudentName + ' got: ' + bestStudentGrade)
}

function printBestStudentName2() {

    var bestStudentGrade = 0
    var bestStudentName = ''

    for (var i = 0; i < studentGrades.length; i++) {
        var currGrade = studentGrades[i]
        // console.log('currGrade', currGrade)
        var currName = studentNames[i]
        if (currGrade > bestStudentGrade) {
            bestStudentGrade = currGrade
            bestStudentName = currName
        }
    }

    // console.log('bestStudentGrade', bestStudentGrade)
    // console.log('bestStudentName', bestStudentName)
    console.log(bestStudentName + ' got: ' + bestStudentGrade)
}

