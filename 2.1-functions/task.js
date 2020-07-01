// function getSolutions(a, b, c) {
//     const D = b ** 2 - 4 * a * c
//     let x1 = 0
//     let x2 = 0
//     const result = {
//         D: D,
//         roots: []
//     }
//     if (D > 0) {
//         x1 = (-b + Math.sqrt(D)) / (2 * a)
//         x2 = (-b - Math.sqrt(D)) / (2 * a)
//         result.roots = [x1, x2]
//     }
//     if (D === 0) {
//         x1 = -b / (2 * a)
//         result.roots = [x1]
//     }
//     return result;
// }

// function showSolutionsMessage(a, b, c) {
//     const result = getSolutions(a, b, c)
//     const D = result.D
//     alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
//     alert(`Значение дискриминанта: ${D}`)
//     if (D > 0) {
//         alert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]} `)
//     }
//     if (D === 0) {
//         alert(`Уравнение имеет один корень. X₁ = ${result.roots[0]} `)
//     }
//     if (D < 0) {
//         alert(`Уравнение не имеет вещественных корней `)
//     }
// }
// showSolutionsMessage(7, 20, -3)
const inputData = {
    algebra: [4, 5, 5, 4],
    geometry: [2, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
};

function getAverageScore(data) {
    let total = {};
    for (key in data) {
        const averageMark = getAverageMark(data[key])
        Object.assign(total, {
            [key]: averageMark
        })
    }
    const average = getAverageMark(Object.values(total))
    Object.assign(total, {
        average
    })
    console.log(total)
    return total;
}
getAverageScore(inputData)

function getAverageMark(marks) {
    if (marks.length) {
        let sum = marks.reduce((a, b) => a + b, 0)
        let result = sum / marks.length
        return result
    } else {
        return 0
    }
}