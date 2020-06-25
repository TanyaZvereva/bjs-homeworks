class Weapon {
    constructor(options) {
        this.name = options.name
        this.attack = options.attack
        this.durability = options.durability
        this.range = options.range
        this.currentDurability = options.durability
    }
    takeDamage(damage) {
        if (damage <= this.durability) {
            this.durability -= damage
        } else {
            this.durability = 0
        }
    }
    getDamage() {
        if (this.durability === 0) {
            return 0
        }
        if (this.durability >= (this.currentDurability * 30 / 100)) {
            return this.attack
        } else {
            return this.attack / 2
        }
    }
    isBroken() {
        return this.durability < 0
    }
}
// const arm = new Weapon({
//     name: 'Рука',
//     attack: 1,
//     durability: Infinity,
//     range: 1,
// });
// const bow = new Weapon({
//     name: 'Лук',
//     attack: 10,
//     durability: 200,
//     range: 3,
// });
// const sword = new Weapon({
//     name: 'Меч',
//     attack: 25,
//     durability: 500,
//     range: 1,
// });
// const knife = new Weapon({
//     name: 'Нож',
//     attack: 5,
//     durability: 300,
//     range: 1,
// });
// const staff = new Weapon({
//     name: 'Посох',
//     attack: 8,
//     durability: 300,
//     range: 2,
// });
// const longBow = new Weapon({
//     name: 'Длинный Лук',
//     attack: 15,
//     durability: 200,
//     range: 4,
// });
// const axe = new Weapon({
//     name: 'Секира',
//     attack: 27,
//     durability: 800,
//     range: 1,
// });
// const stormStaff = new Weapon({
//     name: 'Посох Бури',
//     attack: 10,
//     durability: 300,
//     range: 3,
// });
// sword.takeDamage(5);
// console.log(sword.durability);

// arm.takeDamage(20);
// console.log(arm.durability);

// bow.takeDamage(20);
// console.log(bow.durability);

// bow.takeDamage(200);
// console.log(bow.durability);

// console.log(bow.durability);
// console.log(bow.getDamage());

// console.log(arm.durability);
// console.log(arm.getDamage());

// console.log(bow.durability);
// console.log(bow.isBroken());

// console.log(arm.durability);
// console.log(arm.isBroken());

class Arm extends Weapon {
    constructor() {
        super({
            name: "Рука",
            attack: 1,
            durability: Infinity,
            range: 1
        })
    }
}

const arm = new Arm();
console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        })
    }
}
const bow = new Bow();
console.log(bow.name);
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        })
    }
}
const sword = new Sword();
console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        })
    }
}
const knife = new Knife();
console.log(knife.name);
console.log(knife.attack);
console.log(knife.durability);
console.log(knife.range);

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        })
    }
}
const staff = new Staff();
console.log(staff.name);
console.log(staff.attack);
console.log(staff.durability);
console.log(staff.range);

class LongBow extends Bow {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        })
        this.name = 'Длинный Лук',
            this.attack = 15,
            this.range = 4
    }
}
const longBow = new LongBow();
console.log(longBow.name);
console.log(longBow.attack);
console.log(longBow.durability);
console.log(longBow.range);

class Axe extends Sword {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        })
        this.name = 'Секира',
            this.attack = 27,
            this.durability = 800
    }
}
const axe = new Axe();
console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);


class StormStaff extends Staff {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        })
        this.name = 'Посох Бури',
            this.attack = 10,
            this.range = 3
    }
}
const stormStaff = new StormStaff();
console.log(stormStaff.name);
console.log(stormStaff.attack);
console.log(stormStaff.durability);
console.log(stormStaff.range);