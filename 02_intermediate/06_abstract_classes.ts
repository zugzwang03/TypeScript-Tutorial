abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) { }

    abstract getSepia(): void;
    getReelTime(): number {
        return 8;
    }
}
// Cannot create an instance of an abstract class.ts(2511)
// const ss = new TakePhoto('test', 'test');

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log('Sepia');
    }
}

const ss = new Instagram('test', 'test', 3);
console.log(ss.getReelTime());