function getFirstElement<Generic>(arr: Generic[]) {
    return arr[0];
}

const myNumber = getFirstElement([1, 2, 3, 4, 5]);
const myString = getFirstElement(["mateus", "itzy", "osu"]);
const myBoolean = getFirstElement([true, false, true, true]);

//

function isEqual<T>(a: T, b: T): boolean {
    return a === b;
}

isEqual(10, 2);
isEqual(2, 2);

//

interface ApiResponse<T> {
    sucess: boolean;
    data: T[];
    error?: string;
}

interface User {
    id: string;
    name: string;
    role: string;
}

interface Book {
    title: string;
    author: string;
}

function fetchUser(): ApiResponse<User> {
    return {
        data: [
            { id: "1234", name: "mateus", role: "admin" }
        ],
        sucess: true
    }
}

function fetchBook(): ApiResponse<Book> {
    return {
        data: [{ title: "chess for begginners", author: "rafael chess" }],
        sucess: true
    }
}

//

class MyCustomArray<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.unshift(item);
    }

    public remove(): T | undefined {
        const deletedItem = this.items.shift();

        return deletedItem || undefined;
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const myCustomStringArray = new MyCustomArray<string>();
myCustomStringArray.add("mateus");
myCustomStringArray.remove();

const myCustomNumberArray = new MyCustomArray<number>();
myCustomNumberArray.add(10);

//

function logLength<T extends { length: number }>(item: T) {
    console.log(item.length);
}

