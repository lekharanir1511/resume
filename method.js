
const prices = [120, 60, 899];

const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Price:", total);



const students = [
    { name: "Arun", marks: 85 },
    { name: "Kiran", marks: 92 },
    { name: "Priya", marks: 78 }
];

const student = students.find(s => s.name === "Kiran");

console.log("Kiran's Marks:", student ? student.marks : "Not found");


function makeGreeter(greeting) {
    return function(name) {
        return `${greeting} ${name}`;
    };
}

console.log(makeGreeter("Hello")("Asha"));


