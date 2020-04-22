const company = {
    name: 'RocketSeat',
    color: 'purple',
    focus: 'programming',
    adress: {
        street: 'Guilherme Gembala street',
        number: 260
    }
}

function printDataCompany (company) {
    console.log(`${company.name} is located in ${company.adress.street}, ${company.adress.number}.`)
}

printDataCompany(company)