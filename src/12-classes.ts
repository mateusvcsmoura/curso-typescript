class Player {
    private static players: Player[] = [];

    public static getPlayers() {
        return Player.players;
    }

    private name: string;
    private health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;

        Player.players.push(this);
    }

    public getHealth() {
        return this.health;
    }

    public getName() {
        return this.name;
    }

    public damage(amount: number, damager?: Player) {
        const updatedHealth = this.health - amount;

        console.log(
            damager
                ? `${damager.getName()} dealt ${amount} damage to ${this.name}`
                : `${this.name} lost ${amount} hp.`
        );

        if (updatedHealth <= 0) {
            this.health = 0;
            this.die();
        }

        this.health = updatedHealth;
    }

    private die(damager?: Player) {
        if (damager) {
            console.log(`${damager.getName()} killed ${this.name}`);
        }

        console.log(`${this.name} died.`);
    }
}

const player1 = new Player("Mateus");
const player2 = new Player("Itzy");

player1.damage(10, player2);



//

interface Drivable {
    startEngine(): void;
    drive(): void;
}

class Car implements Drivable {
    startEngine(): void {
        console.log("Engine Started.");
    }
    drive(): void {
        console.log("Car driving.");
    }
}

// 

abstract class Shape {
    abstract area(): number;

    describe() {
        console.log("this a shape");
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    describe(): void {
        console.log("this a circle");
    }
}

const circle = new Circle(20);
circle.area();
circle.describe();

//

class Person {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }

    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private name: string;

    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }

    public introduce(): void {
        console.log(`i am ${this.name} and i am ${this.getAge()}.`);
    }
}

const mats = new Employee("Mateus", 19);
mats.introduce();

