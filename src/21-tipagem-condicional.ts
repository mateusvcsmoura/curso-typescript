type Conditional<T> = T extends string ? "it is a string" : "it is not a string";

function conditional<T>(value: T): Conditional<T> {
    const text = typeof value === "string" ? "it is a string" : "it is not a string";

    return text as Conditional<T>;
}

const result = conditional("mateus");

