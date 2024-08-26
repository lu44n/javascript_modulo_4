const dayjs = require("dayjs")

function calcDate(birthdate) {
    const today = dayjs()
    const birthdateParsed = dayjs(birthdate)
    const years = today.diff(birthdateParsed, 'year')
    const nextBirthdate = birthdateParsed.add(years + 1, 'year')
    const daysToNextBirthdate = nextBirthdate.diff(today, 'day') + 1
    console.log(`
    Idade: ${years},
    Próxima data de aniversário: ${nextBirthdate.format('DD/MM/YYYY')},
    Faltam ${daysToNextBirthdate} dias para o próximo aniversário.
    `)
}

calcDate('2004-05-08')