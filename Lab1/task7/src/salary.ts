interface Payable{
    pay(): void;
}

abstract class Employee{
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ){}

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable{
    constructor(name: string, age: number, salary: number){
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Виплачено зарплату розробнику ${this.name}: ${this.salary} грн (бонус: ${this.getAnnualBonus()} грн)`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Виплачено зарплату менеджеру ${this.name}: ${this.salary} грн (бонус: ${this.getAnnualBonus()} грн)`);
    }
}

const employees: Employee[] = [
    new Developer("Олексій", 24, 60000),
    new Developer("Ірина", 28, 80000),
    new Manager("Михайло", 35, 100000),
    new Manager("Олена", 40, 120000)
];

let totalBonus = 0;

console.log("=== Інформація про виплати ===\n");

for (const employee of employees) {
    totalBonus += employee.getAnnualBonus();

    (employee as unknown as Payable).pay();
}

console.log(`\nЗагальна річна сума бонусів: ${totalBonus} грн`);