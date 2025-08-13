// Type Anotations

const myName: string = "Mateus";
const myAge: number = 19;
const myBoolean: boolean = true;
const myVar: any = () => { console.log("nada") }; // qualquer tipo (tentar nunca usar)
const myNull: null = null;
const myUndefined: undefined = undefined;

function sum(a: number, b: number): number {
    return a + b;
}

function greet(name: string, isProgrammer: boolean, age?: number): string {
    return isProgrammer ? `Hello, ${name}. You are a programmer` : `Hello, ${name}.`;
}

