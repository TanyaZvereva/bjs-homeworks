function parseCount(value) {
    const count = Number.parseInt(value)
    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    }
    return count;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
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
        return Number(Math.sqrt(body).toFixed(3))
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimeter() {
                return "Ошибка! Неправильный треугольник"
            },
            getArea() {
                return "Ошибка! Неправильный треугольник"
            }
        }

    }
}