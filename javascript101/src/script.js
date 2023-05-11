console.log("Hello World!");
// alert("Hello World!");
document.write("<h1>Hello World!</h1>");

var income = 20;

console.log(income);

// primitive data types
// string == წარმოადგენს სტრიქონს (ტექსტს)
// number == წარმოადგენს რიცხვით მნიშვნელობას
// Boolean == ლოგიკური მნიშვნელობა true / false
// undefined == მნიშვნელობა აქვს თუ არა
// null == განუსაზღვრელი მნიშვნელობა

// numbers
var x = 123;
var y = 4.5;
console.log(x);
// strings
var companyName = "Comm School";

console.log(companyName);

// Boolean

var isAlive = true;

var isDead = false;

console.log(isAlive);

// undefined

var isUndefined;

isUndefined = 54;

console.log(isUndefined);
/////////////////////////
var x = 41;
var y = 7;
var z = x % y;
console.log(z);

var q = 10;

q++;

var a = 23;
a += 5; // ეს იგივეა რაც a = a + 5
console.log(a);

// var income = 100; // number
// var strIncome = "100"; // string

// var result = income == strIncome;
// console.log(result); // true
// var result1 = income === strIncome;
// console.log(result1); // false

// &&
var income = 100;
var percent = 10;

var result = income > 50 && percent < 12;

console.log(result); // true

// ||

var income = 100;
var isDeposit = true;

var result = income < 50 || isDeposit === true;

console.log(result); // true

///// ჩვენი პრიველი პროგრამა
// var strSum = prompt("შეიყვანეთ ანაბრის თანხა");
// var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი");

// var sum = parseInt(strSum);
// var percent = parseInt(strPercent);

// sum = sum + (sum * percent) / 100;
// alert("პროცენტის დარიცხვის შემდეგ ანაბრის თნხა იქნება" + sum);

// console.log("sum", sum);

// if(პირობა)მქმედება

var income = 100;
// var age = 19;
// if (income > 50 && age < 20) {
//   alert("Good");
// } else {
//   alert("Bad");
// }

var income = 300;

if (income < 200) {
  alert("dabali xelpasi");
} else if (income > 200 && income < 400) {
  alert("sashualo xelpasi");
} else {
  alert("kai xepasi");
}

var a = 1;

var b = 2;

var result = a < b ? a + b : a - b;

if (a < b) {
  a + b;
} else {
  a - b;
}

// პრომპტით შეიყვანე ხელფასი რომელიც უდრის (salary) ამ salary  ზე უნდა ადგეთ და
// გაუკეთოტ if else კონსტრუქცია სადაც გავიგებთ ხელფასია კაია საშუალოა თუ გააგდე სახლიდან


var salary = prompt()

parent()

if (){
    alert
} 