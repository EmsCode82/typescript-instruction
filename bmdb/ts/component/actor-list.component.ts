import { Actor } from "../model/actor.class";
import { ActorService } from "../service/actor.service";

export class ActorListComponent {

}
let readline = require('readline-sync');
let actorSvc: ActorService = new ActorService();
let a1: Actor = new Actor();
a1.id = 7;
a1.firstName = "test";
a1.lastName = "fire";
a1.gender = "F";
a1.birthDate = "2020-01-01";
let a2: Actor = new Actor(2, "billy", "blanks", "M", "2020-01-01");
actorSvc.add(a1);
actorSvc.add(a2);


console.log("Welcome to bmdb TypeScript");
console.log("--------------------------");

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU");
    console.log("------------");
    console.log("list - list all actors");
    console.log("get - get a actor");
    console.log("add - add a actor");
    console.log("del - delete a actor");
    console.log("exit - exit the app\n");
    command = readline.question("Command? ");
    switch (command) {
        case "list":
            console.log("Actor List:");
            console.log("---------------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());
            });
            break;
        case "get":
            console.log("Get a Actor by ID:");
            console.log("---------------------");
            let id: number = readline.questionInt("Actor ID?");
            let actor: Actor = actorSvc.get(id);
            console.log(actor.about());
            break;
        case "add":
            console.log("Add a actor:");
            console.log("---------------------");
            id = readline.questionInt("ID?");
            let firstName: string = readline.question("First Name?");
            let lastName: string = readline.questionInt("Last Name?");
            let gender: string = readline.question("Gender?");
            let birthDate: string = readline.question("Birth Date?");
            actor = new Actor(id, firstName, lastName, gender, birthDate);
            actorSvc.add(actor);
            break;
        case "delete":
            console.log("Actor List:");
            console.log("---------------------");
            id = readline.questionInt("ID?");
            actorSvc.delete(id);
            console.log("Actor deleted:");
            break;
        case "exit":
            break;
        default:
            console.log("Invalid command. Try again.");
            break;
    }

}