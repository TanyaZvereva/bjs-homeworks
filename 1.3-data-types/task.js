"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    const S = Number(amount) - Number(contribution)
    const today = new Date()
    const n = (date.getFullYear() - today.getFullYear()) * 12
    const P = Number(percent) / 12
    console.log(P ** n)
    const totalAmmount = S * (P + P / (((1 + P) ** n) - 1))


    return totalAmmount
}

function getGreeting(name) {
    let greeting = ""
    console.log(name)
    if (name === "undefined" || name === "null" || name === "") {
        greeting = `Привет, мир!Меня зовут Аноним.`
    } else {
        greeting = `Привет, мир! Меня зовут ${name} .`
    }
    return greeting
}