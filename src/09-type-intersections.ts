interface Robot {
    material: string;
    fuel: string;
}

interface Human {
    name: string;
    age: number;
}

type Cyborg = Robot & Human;

const cyborg: Cyborg = {
    age: 24,
    name: "Bh",
    fuel: "Gas",
    material: "Metal"
}

// 

interface ApiFetchOptions {
    printInput?: boolean;
    printTime?: boolean;
}

type RequestOptions = ApiFetchOptions & RequestInit; // nossas opções + opções customizadas do fetch

function apiFetch(input: string, options?: RequestOptions) {
    if (options?.printInput) {
        console.log(`input: ${input}`);
    }

    if (options?.printTime) {
        console.log(`date: ${new Date().toDateString()}`);
    }

    return fetch(input, options);
}

apiFetch("http://localhost:3000/api/auth", {
    printInput: true,
    printTime: true,
    method: "GET"
});

