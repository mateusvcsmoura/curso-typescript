function printValue(value: string | number) {
    if (typeof (value) === "string") {
        console.log(value.toLocaleUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

//

class Dog {
    bark() {
        console.log("woof");
    }
}

class Cat {
    meow() {
        console.log("meow");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

//

interface Teacher {
    teach(): void;
    diploma: string;
}

interface Driver {
    drive(): void;
    license: string;
}

interface Chef {
    cook(): void;
    certificate: string;
}

type Professionals = Teacher | Driver | Chef;

function isChef(value: Professionals): value is Chef {
    return (value as Chef).cook() !== undefined;
}

function isTeacher(value: Professionals): value is Teacher {
    return (value as Teacher).teach() !== undefined;
}

function isDriver(value: Professionals): value is Driver {
    return (value as Driver).drive() !== undefined;
}

function execute(professional: Professionals) {
    if (isChef(professional)) {
        professional.cook();
        return;
    } else if (isTeacher(professional)) {
        professional.teach();
        return;
    }

    professional.drive();
    return;
}

//

class ProfessionalsClass {
    isChef(): this is ChefClass {
        return this instanceof ChefClass;
    }

    isTeacher(): this is TeacherClass {
        return this instanceof TeacherClass;
    }

    isDriver(): this is DriverClass {
        return this instanceof DriverClass;
    }
}

class ChefClass extends ProfessionalsClass {
    public cook(): void { };
    public certificate: string = "Certified";
}

class TeacherClass extends ProfessionalsClass {
    public teach(): void { };
    public diploma: string = "Certified";
}

class DriverClass extends ProfessionalsClass {
    public drive(): void { };
    public license: string = "Certified";
}

function executeClass(professional: ProfessionalsClass) {
    if (professional.isChef()) {
        professional.cook();

        return;
    }

    if (professional.isDriver()) {
        professional.drive();

        return;
    }

    if (professional.isTeacher()) {
        professional.teach();

        return;
    }
}

