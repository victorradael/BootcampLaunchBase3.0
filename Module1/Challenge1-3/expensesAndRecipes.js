const users = [
    {
        name: "Salvio",
        recipes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        recipes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        recipes: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function sumValues (user) {
        var totalRecipes = 0;
        var totalExpenses = 0;
        for (const recipe of user.recipes) {
            totalRecipes = totalRecipes + recipe
        }
        for (const expense of user.expenses) {
            totalExpenses = totalExpenses + expense
        }
        user.totalRecipes = totalRecipes
        user.totalExpenses = totalExpenses
};

function calculateBalance (users) {
    for (const user of users) {
        sumValues(user)
        let balance = user.totalRecipes - user.totalExpenses;
        if(balance < 0) {
            console.log(`${user.name} has a NEGATIVE balance of $${balance.toFixed(2)}`)
        } else {
            console.log(`${user.name} has a POSITIVE balance of $${balance.toFixed(2)}`)
        }
    }
};

calculateBalance(users)