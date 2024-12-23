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
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });