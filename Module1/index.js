const classA = [
    {
        name: 'Victor',
        grade: 9.8
    },

    {
        name: 'Gabriel',
        grade: 10
    },

    {
        name: 'Radael',
        grade: 2
    }
];

const classB = [
    {
        name: 'Jhon',
        grade: 6
    },

    {
        name: 'Suzi',
        grade: 7.3
    },

    {
        name: 'Karen',
        grade: 1
    }
];

function calculateAverage(students) {
    let sum = 0

    for (let student of students) {
        sum += student.grade
    }

    const average = sum / students.length

    return average
};

function sendMessage(average, theClass) {
    if (average > 5) {
        console.log(`${theClass} average:${average}. Congratulations!`)
    } else {
        console.log(`${theClass} average:${average}. Is not good.`)
    }
};

function  markAsFlunked (student) {
    student.flunked = false

    if(student.grade < 5){
        student.flunked = true
    }
};

function sendMessageFlunked (student) {
    if(student.flunked) {
        console.log(` The student ${student.name} is flunked.`)
    }
};

function flunkedStudents (students) {
    for ( let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
};

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

flunkedStudents(classA)
flunkedStudents(classB)