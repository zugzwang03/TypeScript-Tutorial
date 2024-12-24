interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

const shreya: User = {
    dbId: 231,
    email: "shreya@google.com",
    userId: 1422,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name: "shreya09") => {
        return 10;
    }
}

shreya.email = 'hfu@gmail.com'