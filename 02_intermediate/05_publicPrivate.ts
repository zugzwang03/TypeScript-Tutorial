// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = 'Jaipur';
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
    constructor(public email: string, private name: string) {
        this.email = email;
        this.name = name;
    }
}