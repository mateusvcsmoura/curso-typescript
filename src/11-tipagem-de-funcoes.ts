type Args = string | number | boolean;

function bootstrap(dirname: string, args?: Args[]): boolean {
    return true;
}

type MainFunction = (args: string[]) => void;

const main: MainFunction = () => { };

interface Functions {
    run(context: string): void;
    execute(): boolean;
}

//

function oldCustomLog(text: string, color: string = "red", time: Date = new Date(), author: string = "ts") {
    console.log(text, color);

    if (time) console.log(time.toDateString());
    if (author) console.log(`by: ${author}`);
}

oldCustomLog("Hello, World!", "green", new Date(), "mats");

//

interface CustomLogOptions {
    color?: string;
    time?: Date;
    author?: string;
};

function customLog(text: string, options: CustomLogOptions = {}) {
    const { author, time, color = "red" } = options;

    console.log(text, color);

    if (time) console.log(time.toDateString());
    if (author) console.log(`by: ${author}`);
}

customLog("typescript", { time: new Date(), author: "mats" });

