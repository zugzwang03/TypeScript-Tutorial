let score: number | string = 33;
// pipe

score = 44

score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let shreya: User | Admin = { name: "shreya", id: 224 };

shreya = { username: "ss", id: 873 };


function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log(`DB id is: ${id}`);
}

getDBId(3);
getDBId("3");

// arrays

const data: number[] = [1, 2, 3];

const data2: string[] = ['1', '2', '3'];

const data3: (string | number)[] = ['1', 2, '3'];

let pi:3.14 = 3.14;

// pi = 3.145 // not allowed

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

// seatAllotment = "crew" // not allowed
