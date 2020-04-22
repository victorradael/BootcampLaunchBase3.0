const people = [
    {
        name: 'Silvana',
        age: 48,
        contributionInYears: 23,
        genre: 'F'
    },

    {
        name: 'Ricardo',
        age: 75,
        contributionInYears: 40,
        genre: 'M'
    },

    {
        name: 'Jussara',
        age: 50,
        contributionInYears: 30,
        genre: 'F'
    },

    {
        name: 'Manoel',
        age: 55,
        contributionInYears: 20,
        genre: 'M'
    }
];

function validateRetirement (person) {
    if(person.genre === 'M') {
        let sumService = person.age + person.contributionInYears
        if(sumService > 95 && person.contributionInYears >= 35){
            return person.retirement = true
        } else {
            return person.retirement = false
        }

    }else if(person.genre === 'F') {
        let sumService = person.age + person.contributionInYears
        if(sumService > 85 && person.contributionInYears >= 30){
            return person.retirement = true
        } else {
            return person.retirement = false
        }

    } else {
        console.log('Invalid Genre')
    }
};

function sendMessageRetirement (people) {
    for (const person of people) {
        validateRetirement(person)
        if(person.retirement){
            console.log(`${person.name} can retire.`)
        } else if (!person.retirement) {
            console.log(`${person.name} can't retire.`)
        } else {
            console.log(' Invalid State')
        }
    }
};

sendMessageRetirement(people)