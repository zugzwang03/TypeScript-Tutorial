const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("3");

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "", type: 0 });

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIdx = 4;
    return products[myIdx];
}