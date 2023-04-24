import  Activity  from "./src/modules/ActivityClass";
import  saveToArray  from "./src/modules/SaveToArray";
import userCreation  from "./src/modules/UserCreation";
import  saveToJSON  from "./src/modules/SaveToJSON";

// A menu that first greets the user and then asks them what they want to do. The user can choose between saving activities to an array for them to be saved to a JSON file, or to create a user and see what activities they can do.
let readline = require("readline-sync");
console.log("Welcome to the Activity Planner!");
let menu: string = readline.question("What do you want to do? (1 - Save activities to an array, 2 - Create a user and see what activities they can do): ");
if (menu === "1") {
    let activities: Activity[] = saveToArray();
    saveToJSON(activities);
} else if (menu === "2") {
    userCreation();
} else {
    console.log("Invalid input.");
}