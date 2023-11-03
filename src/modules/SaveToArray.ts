import Activity from "./ActivityClass";

export default function saveToArray(): Activity[] {
    let readline = require("readline-sync");

    let activities: Activity[] = [];
    let activityName: string = "";
    let activityDescription: string = "";
    let activityDuration: number = 0;
    let activityIntensity: number = 0;
    let activityCategory: string = "";
    let activity: Activity;

    while (activityName !== "quit") {
        activityName = readline.question("Please enter the name of the activity (type 'quit' to stop): ");
        if (activityName.toLowerCase() !== "quit") {
            activityDescription = readline.question("Please enter the description of the activity: ");
            activityDuration = readline.questionInt("Please enter the duration of the activity in minutes: ");
            activityIntensity = readline.questionInt("Please enter the intensity of the activity from 1 to 10: ");
            activityCategory = readline.question("Please enter the category of the activity: ");
            activity = new Activity(activityName, activityDescription, activityDuration, activityIntensity, activityCategory);
            activities.push(activity);
        }
    }
    return activities;
}