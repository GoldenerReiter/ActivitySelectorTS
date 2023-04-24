// creates a User class that can be used to check if a user has a certain energy (a number from 1 to 10) of doing the activities in the activity JSON file.
// The logic of this class, is that will check if the energy of the User is greater than the intensity of the activity, and if the time of the User is greater than the duration of the activity.

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