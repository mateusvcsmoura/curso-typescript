type NameList = string[];

type CalendarDate = [day: number, month: number, year: number]; // tupla

const list: NameList = [];
list.push("Mateus");

const date: CalendarDate = [10, 8, 2006];

function createDate(date: CalendarDate) {
    const [day, month, year] = date;
}

createDate(date);

