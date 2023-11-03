import Activity from "./ActivityClass"

export default function saveToJSON(activities: Activity[]): void {
    let fs = require("fs");
    let readline = require("readline-sync");

    let activityCategory: string = activities[0].getCategory();
    let fileName: string = activityCategory + ".json";
    let fileExists: boolean = fs.existsSync(fileName);

    if (fileExists) {
        let overwrite: string = readline.question("The file already exists. Do you want to overwrite it? (y/n): ");
        if (overwrite.toLowerCase() === "y") {
            fs.writeFileSync(fileName, JSON.stringify(activities));
            console.log("File overwritten.");
        } else {
            console.log("File not overwritten.");
        }
    } else {
        fs.writeFileSync(fileName, JSON.stringify(activities));
        console.log("File created.");
    }
}