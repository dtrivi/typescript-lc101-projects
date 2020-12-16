import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo }  from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let item of items) {
            total += item.massKg;
        }
        return total;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd() === true) {
            let total: number = 0;
            cargo.push(this.cargoItems)
            return true;
        }
    }
}