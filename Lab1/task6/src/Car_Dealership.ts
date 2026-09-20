abstract class Car{
    protected brand: string;
    protected year: number;

    private vinNumber: string;

    public isEngineRunning: boolean;

    constructor(brand: string, year: number, vinNumber: string) {
        this.brand = brand;
        this.year = year;
        this.vinNumber = vinNumber;
        this.isEngineRunning = false;
    }
    
    public getVin(): string {
        return this.vinNumber;
    }

    public abstract getInfo(): void;

    public startEngine(): void{
        this.isEngineRunning = true;
        console.log(`Двигун ${this.brand} запущено.`);
    }
}

class Audi extends Car {
    private quattroSystem: string;

    constructor(
        public model: string,
        year: number,
        vinNumber: string,
        quattroSystem: string
    ){
        super("Audi", year, vinNumber);
        this.quattroSystem = quattroSystem;
    }

    public getInfo(): void {
        console.log(
        `[Audi] Модель: ${this.model}, Рік: ${this.year}, Привід: ${this.quattroSystem}, VIN: ${this.getVin()}`        
        );
    }
}

class Bmw extends Car{
    private mPackage: boolean;

    constructor(
        public model: string,
        year: number,
        vinNumber: string,
        mPackage: boolean
    ){
        super("BMW", year, vinNumber);
        this.mPackage = mPackage;
    }

    public getInfo(): void {
        const hasM = this.mPackage ? "Так" : "Ні";
        console.log(
            `[BMW] Модель: ${this.model}, Рік: ${this.year}, M-пакет: ${hasM}, VIN: ${this.getVin()}`
        );
    }
}

class Tesla extends Car {
    private batteryCapacity: number; 

    constructor(
    public model: string,
        year: number,
        vinNumber: string,
        batteryCapacity: number
    ) {
        super("Tesla", year, vinNumber);
        this.batteryCapacity = batteryCapacity;
    }

    public getInfo(): void {
        console.log(
            `[Tesla] Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} kWh, VIN: ${this.getVin()}`
        );
    }
}

const audi1 = new Audi("A6", 2021, "WAUZ1", "Ultra Quattro");
const audi2 = new Audi("RS7", 2023, "WAUZ2", "Sport Quattro");

const bmw1 = new Bmw("330i", 2020, "WBA1", true);
const bmw2 = new Bmw("X5", 2022, "WBA2", false);

const tesla1 = new Tesla("Model 3", 2022, "5YJ1", 75);
const tesla2 = new Tesla("Model S Plaid", 2024, "5YJ2", 100);

const garage: Car[] = [audi1, audi2, bmw1, bmw2, tesla1, tesla2];

console.log("=== Інформація про автомобілі ===\n");
garage.forEach((car) => car.getInfo());