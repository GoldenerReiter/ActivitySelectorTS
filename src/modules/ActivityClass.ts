export default class Activity {
    name: string;
    description: string;
    duration: number;
    intensity: number;
    category: string;

    constructor(name: string, description: string, duration: number, intensity: number, category: string) {
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.intensity = intensity;
        this.category = category;
    }

    // get category method
    getCategory(): string {
        return this.category;
    }
}