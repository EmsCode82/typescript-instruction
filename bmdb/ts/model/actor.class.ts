export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;

    constructor(id: number = 0, firstName: string = "", lastName: string = "", gender: string = "",
        birthDate: string = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
    }

    about(): void {
        console.log(`${this.firstName}, rated ${this.gender},was
        released in ${this.lastName}.   Directed by ${this.birthDate}.`);
    }
} 