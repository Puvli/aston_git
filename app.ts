class Vehicle {
    protected _speed: number;
  
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {
      this._speed = 0;
    }
  
    accelerate(amount: number): void {
      this._speed += amount;
    }
  
    brake(amount: number): void {
      this._speed = Math.max(0, this._speed - amount);
    }
  
    info(): void {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Скорость: ${this._speed} км/ч`);
    }
  
    static compareByYear(vehicle1: Vehicle, vehicle2: Vehicle): number {
      return vehicle1.year - vehicle2.year;
    }
  }
  
  class Car extends Vehicle {
    constructor(
      brand: string,
      model: string,
      year: number,
      public fuelType: string
    ) {
      super(brand, model, year);
    }
  
    refuel(): void {
      console.log(`${this.brand} ${this.model} заправляется ${this.fuelType}`);
    }
  }
  
  class ElectricCar extends Car {
    private _batteryLevel: number;
  
    constructor(brand: string, model: string, year: number, batteryLevel: number = 100) {
      super(brand, model, year, 'электричество');
      this._batteryLevel = batteryLevel;
    }
  
    get batteryLevel(): number {
      return this._batteryLevel;
    }
  
    set batteryLevel(level: number) {
      this._batteryLevel = Math.max(0, Math.min(100, level));
    }
  
    charge(): void {
      this.batteryLevel = 100;
      console.log(`${this.brand} ${this.model} полностью заряжен!`);
    }
  
    refuel(): void {
      console.log(`${this.brand} ${this.model} заряжается вместо заправки!`);
    }
  }
  
  interface Drivable {
    accelerate(amount: number): void;
    brake(amount: number): void;
  }
  
  function testDrive(vehicle: Vehicle): void {
    console.log(`Тест-драйв ${vehicle.brand} ${vehicle.model}`);
    vehicle.accelerate(20);
    vehicle.brake(10);
    vehicle.info();
  }
  
  const car1 = new Car('Mazda', 'CX-7', 2020, 'бензин');
  const car2 = new ElectricCar('Tesla', 'Model Y', 2022);
  const car3 = new Car('Toyota', 'Land Cruiser', 2018, 'дизель');
  
  // Тестируем
  car1.accelerate(50);
  car1.brake(30);
  car1.refuel();
  car1.info();
  
  car2.accelerate(60);
  car2.brake(40);
  car2.refuel();
  car2.charge();
  car2.info();
  
  console.log('\nПроведение тест-драйва:');
  testDrive(car1);
  testDrive(car2);
  
  const vehicles: Vehicle[] = [car1, car2, car3];
  vehicles.sort(Vehicle.compareByYear);
  
  console.log('\nОтсортированный список транспорта:');
  vehicles.forEach(v => v.info());
  