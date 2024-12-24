interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

// reopening of interface
interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | 'ta' | 'learner'
}

const shreya: Admin = {
    dbId: 231,
    role: "admin",
    email: "shreya@google.com",
    userId: 1422,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name: "shreya09") => {
        return 10;
    },
    githubToken: "github"
}

shreya.email = 'hfu@gmail.com'