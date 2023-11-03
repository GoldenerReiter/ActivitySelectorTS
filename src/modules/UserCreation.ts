import User  from "./UserCapabilities";
import  Activity from "./ActivityClass"

export default function userCreation(): void {
    let fs = require("fs");
    let readline = require("readline-sync");

    let activityCategory: string = readline.question("Please enter the category of the activities you want to do: ");
    let fileName: string = activityCategory + ".json";
    let fileExists: boolean = fs.existsSync(fileName);

    if (fileExists) {
        let user: User = new User(readline.question("Please enter your name: "), readline.questionInt("Please enter your energy from 1 to 10: "), readline.questionInt("Please enter your time in minutes: "));
        let activities: Activity[] = JSON.parse(fs.readFileSync(fileName, "utf8"));
        let activitiesToDo: Activity[] = [];

        for (let i: number = 0; i < activities.length; i++) {
            if (user.energy >= activities[i].intensity && user.time >= activities[i].duration) {
                activitiesToDo.push(activities[i]);
            }
        }

        console.log("You can do the following activities: ");
        for (let i: number = 0; i < activitiesToDo.length; i++) {
            console.log(activitiesToDo[i].name);
        }
    } else {
        console.log("The file does not exist.");
    }
}

