let numbers = [
  [1, 2, 3],

  [4, 5, 6],
];
console.log(numbers[0][2]);
console.log(numbers[1][1]);

// let students = [
//   ["Tom", 25, "CS", false],
//   ["Alice", 25, "BS", true],
//   ["Bob", 25, "Art", true],
// ];
let people = ["Tom", "Alice", "Genadi"];
console.log(people);

// for ([მრიცხველის ინიციალიზაცია][პირობა][მრიცხველის შეცვლა]) {
// მოქმედებები
// }
// for (let i = 0; i < people.length; i++) {
//   document.write(people[i] + "<br>");
// }

// for (ინდექსი in მასივი)

// for (index in people) {
//   document.write(people[index] + "<br>");
// }

// let index = 0;

// while (index < people.length) {
//   console.log(people[index]);
//   index++;
// }

const number = [1, 2, 3, 5, 8, 9, 10, 15, 26, 37];

/// mxolod kenti ricxvebi

for (let i = 0; i < number.length; i++) {
  if (number[i] > 10) break;
  console.log(number[i]);
}

function goodMorning() {
  document.write("Good morning");
}

function goodEvning() {
  document.write("good Evning");
}

let message = goodMorning;
message();

message = goodEvning;
message();

function firstParam(x) {
  let z = x * x;
  console.log("params", z);
}

firstParam(5);

function twoParams(x, y) {
  if (y === undefined) y = x;
  let z = x * y;
  console.log("twoPArams", z);
}

twoParams(5); // 25

twoParams(6, 4); // 20

function miltipleParams() {
  let z = 1;
  for (let i = 1; i < arguments.length; i++) {
    z *= arguments[i];
    console.log(z);
  }
}

miltipleParams(6, 5, 4);

function display(x, func) {
  let message = func(x);
  document.write(message);
}

function welcomeMessage(time) {
  if (time < 12) return "დილა მშვიდობის";
  else return "საღამო მშვიდობის";
}

display(13, welcomeMessage);

function getFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

let result = getFactorial(4);
console.log(result);

// console.log(foo); // undefined
// const foo = "test";

let c = a + b; // undefined + undefined === Null
const a = 5;
const b = 10;

console.log(c); //Nan
