function getAnimalSound(animal) {
    let sound = animal.sound
    if (animal === 'undefined') {
        return null
    } else {
        return sound
    }
}

function getAverageMark(marks) {
    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue)
    const averageMark = marks.reduce(reducer) / marks.length
    const roundedAverage = Math.floor(averageMark)
    return roundedAverage
}

function checkBirthday(birthday) {
    const now = +new Date()
    const data = +new Date(birthday)
    const diff = now - data
    const year = +(new Date().getFullYear() - 2019)
    const age = diff / (364.25 * 24 * 60 * 60 * 1000)

    return age >= 18
}