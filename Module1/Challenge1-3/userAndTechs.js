const users = [
    {
        name: 'Silvana',
        techs: ['CSS', 'HTML']
    },

    {
        name: 'Ricardo',
        techs: ['JavaScript', 'React-Native']
    },

    {
        name: 'Jussara',
        techs: ['Python', 'Ruby']
    },
    
];

function printUserAndTechs (users) {
    for (const user of users) {
        console.log(`${user.name} working with ${user.techs[0]}, ${user.techs[1]}`)
    }
};

printUserAndTechs(users)