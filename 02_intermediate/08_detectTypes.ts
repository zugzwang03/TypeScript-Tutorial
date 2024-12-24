function detectType(val: number | string) {
    // typeof type guards
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}

// strings as "" is considered falsy