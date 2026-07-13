let message: string = "Hello, TypeScript!";
console.log(message);

// Variable declarations with different types
let age: number = 25;
console.log("Age:", age);

let firstName: string = "Alice";
console.log("First Name:", firstName);

let isStudent: boolean = true;
console.log("Is Student?", isStudent);

let emptyValue: null = null;
console.log("Empty Value:", emptyValue);

let notAssigned: undefined = undefined;
console.log("Not Assigned:", notAssigned);

let uniqueId1: symbol = Symbol("id");
let uniqueId2: symbol = Symbol("id");
console.log("Are symbols equal?", uniqueId1 === uniqueId2); // false

let bigNumber: bigint = 9007199254740991n;
console.log("Big Number:", bigNumber);

let userId: string | number;
userId = 101;
console.log("User ID (number):", userId);
userId = "A101";
console.log("User ID (string):", userId);

function printStatus(status: "success" | "error" | "loading") {
    console.log("Status:", status);
}
printStatus("success");
printStatus("loading");

// Union type with array
let mixedArray: (string | number)[] = [1, "two", 3, "four"];
console.log("Mixed Array:" , mixedArray);
function showLength(value: string | number) {
    if (typeof value === "string") {
        console.log("String length: ", value.length);
    } else {
        console.log("Number doubled: ", value * 2);
    }
}
showLength("Hello");
showLength(10);

// conditional statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}
let isStudent2: boolean = true;
let message2: string = isStudent2 ? "Welcome, Student!" : "Welcome, Guest!";
console.log(message2);

// Object type declaration
let person: { name: string; age: number; isStudent: boolean } = {
    name: "Alice",
    age: 22,
    isStudent: true
};
console.log("Person:", person);
let car: { brand: string; model?: string } = {
    brand: "Toyota"
};
console.log("Car:", car);
type Book = {
    readonly id: number;
    title: string;
};
let myBook: Book = { id: 1, title: "TypeScript Basics" };
console.log("Book:", myBook);
let Student: {
    name: string;
    address: { city: string; country: string };
} = {
    name: "Bob",
    address: {
        city: "New York",
        country: "USA"
    }
};
console.log("Student:", Student);   

// Array type declaration
let numbers: number[] = [10, 20, 30, 40];
console.log("Numbers Array:", numbers);
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits);
numbers.push(50);
console.log("Updated Numbers Array:", numbers);

// Tuple type declaration
let user: [number, string, boolean] = [1, "Alice", true];
console.log("User Tuple:", user);
console.log("User Name: ", user[1]);
console.log("Is Active: ", user[2]);
let employee: [number, string, string?] = [101, "Bob"];
console.log("Employee Tuple:", employee);

// Enum type declaration
enum Direction {
    Up, 
    Down,
    Left,
    Right
}
console.log("Direction Up:", Direction.Up);
console.log("Direction Down:", Direction.Down);
console.log("Direction Left:", Direction.Left);
console.log("Direction Right:", Direction.Right);
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
console.log("Status Success:", Status.Success);
console.log("Status NotFound:", Status.NotFound);
console.log("Status ServerError:", Status.ServerError);