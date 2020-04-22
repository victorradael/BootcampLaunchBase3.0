const user = {
    name: 'Victor',
    transactions: [],
    balance: 0
};

function createTransaction(type, value) {
    let transaction = {
        type,
        value
    }
    user.transactions.push(transaction)
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value
    }
    return user
};

function getHigherTransactionByType(transactionType) {
    let higher = 0;
    let transac
    for (const transaction of user.transactions) {
        if (transactionType === transaction.type) {
            if (higher < transaction.value) {
                higher = transaction.value
                transac = transaction
            }
        }
    }
    console.log(transac)
    return transac
};

function getAverageTransactionValue() {
    let sumAllTransactions = 0
    for (const transaction of user.transactions) {
        sumAllTransactions = sumAllTransactions + transaction.value
    }
    let average = sumAllTransactions / user.transactions.length
    console.log(average)
    return average
};

function getTransactionsCount() {
    let countCredit = 0
    let countDebit = 0
    user.transactions.map(transaction => {
        if (transaction.type === 'credit') {
            countCredit++
        } else if (transaction.type === 'debit') {
            countDebit++
        }
    })

    const result = {
        credit: countCredit,
        debit: countDebit
    }
    console.log(result)
    
    return result
};

createTransaction('credit', 50.5)
createTransaction('credit', 200)
createTransaction('debit', 98.3)
createTransaction('debit', 500)
console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()