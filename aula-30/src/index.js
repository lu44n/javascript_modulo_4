const mediaSimples = (...numbers) => {
    if (numbers.length === 0) {
        return 0
    }
    else {
        return numbers.reduce((acc, number) => acc + number, 0) / numbers.length
    }
}

console.log(`Cálculo de Média Simples para os seguintes valores:
    1, 2, 3, 4, 5: ${mediaSimples(1, 2, 3, 4, 5)}`)

const mediaPonderada = (...entries) => {
    let sumCalculate = 0
    let weightCalculate = 0
    if (entries.length === 0) {
        return 0
    }
    else {
        for (let i = 0; i < entries.length; i++) {
            sumCalculate += entries[i].n * entries[i].p 
            weightCalculate += entries[i].p
        }
        return sumCalculate / weightCalculate
    }
}

console.log(`Cálculo de Média Ponderada para os seguintes valores:
    {n: 7, p: 2},
    {n: 9, p: 5},
    {n: 3, p: 1}: ${mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })}`
)

const mediana = (...numbers) => {
    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
    }
    else {
        return numbers[Math.floor(numbers.length / 2)]
    }
}

console.log(`Cálculo de Mediana para os seguintes valores:
    2, 4, 5, 7, 42, 99: ${mediana(2, 4, 5, 7, 42, 99)}`)

const moda = (...numbers) => {
    const frequency = {}
    let maxFreq = 0
    let mostFrequent

    for (const item of numbers) {
        frequency[item] = (frequency[item] || 0) + 1

        if (frequency[item] > maxFreq) {
            maxFreq = frequency[item]
            mostFrequent = item
        }
    }
    return mostFrequent
}

console.log(`Cálculo de Moda para os seguintes valores:
    1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4: ${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)