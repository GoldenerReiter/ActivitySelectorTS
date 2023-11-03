export default class User {
    name: string;
    energy: number;
    time: number;

    constructor(name: string, energy: number, time: number) {
        this.name = name;
        this.energy = energy;
        this.time = time;
    }
}