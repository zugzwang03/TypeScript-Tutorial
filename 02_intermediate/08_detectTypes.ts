function detectType(val: number | string) {
    // typeof type guards
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}

// strings as "" is considered falsy

function logValue(x: Date | string) {
    if (x instanceof Date) { // object is instance of a class
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food";
    }
    else {
        pet
        return "bird food";
    }
}