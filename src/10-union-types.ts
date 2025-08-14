type Primitive = string | number | boolean;

function main(value: Primitive) {
    if (typeof (value) === "string") {

    }

    if (typeof (value) === "number") {

    }

    if (typeof (value) === "boolean") {

    }
}

//

enum TrafficLightType {
    Yellow,
    Red,
    Green
}

interface YellowColor {
    type: TrafficLightType.Yellow;
    wait(): void
}

interface RedColor {
    type: TrafficLightType.Red;
    stop(): void
}

interface GreenColor {
    type: TrafficLightType.Green;
    drive(): void
}

type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    type: TrafficLightType.Green,
    drive() {
        console.log("drive");
    },
};

//

type Action = "create" | "update" | "delete";

function manage(action: Action) {

}

manage("create");

type Status = "OK" | 400 | "Not found" | 500 | "Forbidden";

function sendStatus(status: Status) {

}

sendStatus(500);

//

// ele pode ser um array dele mesmo (todos os tipos)
type JSONValue = string | number | boolean | JSONValue[] | { [key: string]: JSONValue };

//

type FindItemPredicate = (number) | ((value: string, index: number) => boolean);

function findItem(array: string[], predicate: FindItemPredicate) {
    if (typeof (predicate) === "number") {
        return array[predicate];
    }

    array.find(predicate);
}

findItem(["desktop", "pc"], (value) => value.startsWith("p"));

