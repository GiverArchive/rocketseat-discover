const family = {
  incomes: [1250, 400.21, 140.2, 7500, 250.5, 100],
  expenses: [3000, 27.5, 30.15, 249.99]
}

function sum(array) {
  let total = 0

  for(let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const incomes = sum(family.incomes)
  const expenses = sum(family.expenses)

  const balance = incomes - expenses

  let text = `O saldo fechou em ${balance.toFixed(2)} reais, você está em saldo ${balance >= 0 ? 'positivo' : 'negativo'}.`

  return text
}

console.log(calculateBalance())