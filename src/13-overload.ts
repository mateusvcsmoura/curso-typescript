/**
 * Create a new Date from another
 */
function createDate(value: Date): Date;
/**
 * Create a new Date from a number
 */
function createDate(value: number): Date;
/**
 * Create a new Date from a string
 */
function createDate(value: string): Date;
function createDate(value: Date | number | string): Date {
    return new Date(value);
}

//

interface Component {
    id: string;
    label: string;
}

interface Button extends Component {
    style: string;
}

interface SelectMenu extends Component {
    options: string[];
}

enum InputType {
    String,
    Number,
    Date,
    Email,
    Password
}

interface Input extends Component {
    type: InputType;
}

function buildComponent(id: string, label: string, type: InputType): Input
function buildComponent(id: string, label: string, options: string[]): SelectMenu
function buildComponent(id: string, label: string, style: string): Button
function buildComponent(id: string, label: string, arg: string | string[] | InputType) {
    if (typeof (arg) === "string") {
        return { id, label, style: arg };
    }

    if (Array.isArray(arg)) {
        return { id, label, options: arg };
    }

    return { id, label, type: arg };
}

const button = buildComponent("1", "label", "green");
const select = buildComponent("12", "label", ["apple", "onion"]);
const input = buildComponent("123", "label", InputType.Email);

