interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

class Circle implements Shape{
    constructor(
        public radius: number
    ){}

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        if(factor>0){
            this.radius *= factor;
        }
    }
}

class Rectangle implements Shape {
    constructor(
        public width: number,
        public height: number
    ) {}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        if (factor > 0) {
            this.width *= factor;
            this.height *= factor;
        }
    }
}

class Triangle implements Shape{
    constructor(
        public sideA: number,
        public sideB: number,
        public sideC: number
    ){}

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;  
    }

    getArea(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }

    scale(factor: number): void {
        if(factor > 0){
            this.sideA *= factor;
            this.sideB *= factor;
            this.sideC *= factor;
        }
    }
}

const shapes: Shape[] = [
  new Circle(5), 
  new Rectangle(10, 20), 
  new Triangle(3, 4, 5)
];

let totalArea = 0;
let totalPerimeter = 0

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`Загальна площа фігур: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр фігур: ${totalPerimeter.toFixed(2)}`);

console.log("\nМасштабування у 2 рази");
for (const shape of shapes) {
    shape.scale(2);
}

let newTotalArea = 0;
let newTotalPerimeter = 0;

for (const shape of shapes) {
    newTotalArea += shape.getArea();
    newTotalPerimeter += shape.getPerimeter();
}

console.log(`Нова загальна площа: ${newTotalArea.toFixed(2)}`);
console.log(`Новий загальний периметр: ${newTotalPerimeter.toFixed(2)}`);