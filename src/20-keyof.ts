interface Person {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person;

function modifyProp(prop: PersonKeys) { }

//

function getProperty<T, K extends keyof T>(obj: T, key: K) { }

const person = { name: "mateus", age: 19 };
const game = { title: "lol", releaseYear: 2009 };
const book = { title: "chess for begginners", author: "r chess" };

getProperty(person, "name");
