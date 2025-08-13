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

interface Admin extends User {
    ban(user: User): void;
    kick(user: User): void;
}

function createUser(name: string): User {
    return { name, createdAt: new Date(), talk() { console.log(`I am ${name}`) } };
}

function updateWallet(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet };
}

function promoteUser(user: User): Admin {
    return {
        ...user,
        ban(userToBan) { console.log(`${userToBan} was banned by ${this.name}`) },
        kick(userToKick) { console.log(`${userToKick} was kicked by ${this.name}`) }
    };
}

function adminAction(admin: Admin) {
    console.log("admin action");
}

const mateus = createUser("Mateus");
updateWallet(mateus, { coins: 9 });

const adminMateus = promoteUser(mateus);
adminMateus.ban(mateus);

// adminAction(mateus); user mateus is not an admin
adminAction(adminMateus);

