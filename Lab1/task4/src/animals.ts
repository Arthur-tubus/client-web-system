interface Animal{
    name: string;
    age?: number;

    //Пересування
    run?(): void;
    fly?(): void;
    swim?(): void;

    // звуки
    makeSound(): void;
}

// ----------------
class Cat implements Animal {
    constructor(public name: string, public age: number) {}
    
    run(): void {
        console.log(`${this.name} бігає на чотирьох лапах.`);
    }
    
    makeSound(): void {
        console.log(`${this.name} каже: Мяу`);
    }
}

const myCat = new Cat("Рижик", 3);
myCat.makeSound();
myCat.run();

// ----------------
class Bird implements Animal {
    constructor(public name: string, public age: number, public wingspan?: number) {}
    fly(): void {
        console.log(`${this.name} летить у небі.`);
    }
    
    run(): void {
        console.log(`${this.name} ходить на двох лапках.`);
    }
    
    makeSound(): void {
        console.log(`${this.name} співає: Чирик`);
    }
}

const myBird = new Bird("Горобець", 25);
myBird.makeSound();
myBird.fly();

// ----------------
class Fish implements Animal{
    constructor(public name: string) {}

    swim(): void {
        console.log(`${this.name} пливе у воді.`);
    }

    makeSound(): void {
        console.log(`${this.name} не видає гучних звуків (буль-буль)`);
    }
}

const myFish = new Fish("Немо");
myFish.makeSound();
myFish.swim();