const programmers = [
    {
        name: 'Victor',
        age: 23,
        techs: [
            {
                name: 'JavaScript',
                specialty: 'Web'

            },

            {
                name: 'React-Native',
                specialty: 'Mobile'
            },

            {
                name: 'ReactJS',
                specialty: 'Web'
            }
        ]
    },

    {
        name: 'Gabriel',
        age: 30,
        techs: [
            {
                name: 'Ruby',
                specialty: 'Mobile'

            },

            {
                name: 'PHP',
                specialty: 'Web'
            },

            {
                name: 'Ionic',
                specialty: 'Mobile'
            }
        ]
    },


];

function getTechsSpecialty (programmers) {
    for (const dev of programmers) {
        for (const tech of dev.techs) {
            if(tech === dev.techs[0]){
                console.log(`${dev.name} user is ${dev.age} years 
                 old and uses ${tech.name} with ${tech.specialty} expertise`)
            }
        }
    }
};

getTechsSpecialty(programmers)