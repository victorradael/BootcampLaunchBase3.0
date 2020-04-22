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
        techs: ['Python', 'Ruby', 'CSS']
    },
    
];

function searchByTech (users) {
    for (const user of users) {
        for (const tech of user.techs) {
            if(tech === 'CSS'){
                console.log(`${user.name} working with ${tech}.`)
            }
        } 
    }
};

searchByTech(users)