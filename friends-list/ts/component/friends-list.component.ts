import { Friends } from "../model/friends-list.class";

export class FriendsListComponent {

}
let fl: string[] = [ "one", "two", "three", "four", "five"];
let f1: Friends = new Friends();
f1.id = 1;
f1.name = "Alyssa";
f1.age = 26;
f1.email = "alyssa@gmail.com";
f1.bff = true;
console.log(f1.about());

let l2: Friends = new Friends(2, "Bun-Bun", 5, "bunbun@gmail.com", true);
console.log(l2.about());

let friends: string[] = ["", "marcus", "trevor", "sarah"];
// use a foreach loop to print
for (let friend of friends) {
    console.log(friend);
}