function getSolutions(a, b, c) {
    const D = b ** 2 - 4 * a * c
    let x1 = 0
    let x2 = 0
    const result = {
        D: D,
        roots: []
    }
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a)
        x2 = (-b - Math.sqrt(D)) / (2 * a)
        result.roots = [x1, x2]
    }
    if (D === 0) {
        x1 = -b / (2 * a)
        result.roots = [x1]
    }
    return result;
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c)
    const D = result.D
    alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
    alert(`Значение дискриминанта: ${D}`)
    if (D > 0) {
        alert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]} `)
    }
    if (D === 0) {
        alert(`Уравнение имеет один корень. X₁ = ${result.roots[0]} `)
    }
    if (D < 0) {
        alert(`Уравнение не имеет вещественных корней `)
    }
}
showSolutionsMessage(7, 20, -3)

function getAverageScore(data) {

}

function getAverageMark(marks) {

}

function getPersonData(secretData) {

}

function getDecodedValue(secret) {

}