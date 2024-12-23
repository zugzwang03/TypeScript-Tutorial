const User = {
    name: "Shreya",
    email: "shreya@gmail.com",
    isActive: true
}

// function createUser({ name: string, isPaid: boolean }) {

// }

let newUser = { name: "Shreya", isPaid: false, email: "email@gmail.com" }
// weird behavior with parameters
// createUser(newUser);

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number // optional
}

function createUser(user: User): User {
    return { _id: "", name: "", email: "", isActive: true };
}

createUser({ _id: "", name: "", email: "", isActive: true });

let myUser: User = {
    _id: "1243",
    email: "sh@gmail.com",
    name: "shreya",
    isActive: false
}

myUser.email = "eh@gmail.com"

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}