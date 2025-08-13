interface UserWallet {
    coins?: number;
    credits?: number;
}

interface User {
    name: string;
    createdAt: Date;
    wallet?: UserWallet;
    talk(): void;
}

type Input = string | User;

function prompt(input: Input) { }

//

interface Dog {
    name: string;
    breed: string;
    bark(): string;
}

interface Cat {
    name: string;
    color: string;
    meow(): string;
}

type Animal = Dog | Cat;

function createAnimal(animal: Animal) { }

const rengar = createAnimal({
    name: "Rengar",
    color: "Seamese",
    meow() {
        return "meow";
    },
});

console.log(rengar);

