// const user: (string | number)[] = [1, "sh"];
let tUser: [string, number, boolean];

tUser = ['sh', 1243, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string]

const newUser: User = [122, 'shreya@gmail.com']

newUser[1] = "sh@gmail.com"
// newUser.push(true); // error