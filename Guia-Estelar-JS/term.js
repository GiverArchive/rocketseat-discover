function convert(degress) {
  degress = degress.toLowerCase()

  const hasFahren = degress.includes('f')
  const hasCelsius = degress.includes('c')

  if(!hasFahren && !hasCelsius) {
    throw new Error('Não foi possível detectar a unidade de temperatura!')
  }

  let calc = fahrenheit => (fahrenheit - 32) * 5 / 9
  let value = Number(degress.replace('f', ''))
  let suffix = 'C'

  if(hasCelsius) {
    calc = celsius => celsius * 9 / 5 + 32
    value = Number(degress.replace('c', ''))
    suffix = 'F'
  }

  converted = calc(value).toFixed(2)
  return converted + suffix
}

try {
  console.log(convert('40F'))
  console.log(convert('78C'))
  console.log(convert('12K'))
  console.log(convert('198F'))
  console.log(convert('12C'))
} catch(error) {
  console.log(error.message)
}