function parseCount(value) {
    const count = Number.parseInt(value)
    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(value) {
    try {
        parseCount(value)
        console.log(value)
    } catch (e) {
        parseCount(value)
        console.log("Невалидное значение")
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        const p = this.getPerimeter() / 2
        const body = p * (p - this.a) * (p - this.b) * (p - this.c)
        console.log(body)
        return Math.sqrt(body).toFixed(3)
    }

}

function getTriangle(a, b, c) {
    const answer = new Triangle(a, b, c)
    const answerError = new Triangle(a + b < c || a + c < b || c + b < a)
    try {
        return answer;
    } catch (e) {
        return answerError;
    }
}