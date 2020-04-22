const people = [
    {
        name: 'Carlos',
        weight: 84,
        height: 1.88,
        genre: 'male'
    },

    {
        name: 'Rita',
        weight: 90,
        height: 1.61,
        genre: 'female'
    }
];

function calculatingBMI (person) {
       return  person.weight / (person.height * person.height)
};

function validateBMI (people) {
    for (const person of people) {
        let bmi  = calculatingBMI(person)
        if(bmi >= 30){
            console.log(`${person.name} is overweight.`)
        } else {
            console.log(`${person.name} is not overweight.`)
        }
    }
};

validateBMI(people)