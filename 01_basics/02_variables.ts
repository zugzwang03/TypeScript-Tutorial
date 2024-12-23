let greetings: string = "Hello Shreya";
greetings = greetings.toLowerCase();
console.log(greetings);

// number
let userId = 223422.3;
console.log(userId.toFixed());
// boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn.valueOf());


// any - turn off type checking for this
// noImplicitAny - to avoid errors
let hero: string;
function getHero() {
    return 'thor';
}

hero = getHero()

export {}