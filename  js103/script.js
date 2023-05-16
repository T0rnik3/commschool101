//  OOP

const user = {
  name: "Tom",
  age: 26,
  display: function () {
    console.log(this.name);
  },
};
console.log(user);
user.display();

const country = {
  name: "Germany",
  language: "German",
  capital: {
    name: "Berlin",
    population: 148251,
    year: 1234,
  },
};
console.log(country.name); // Germany

console.log(country.capital.name);

const country1 = {
  name: "შვეიცარია",
  languages: ["გერმანული", "იტალიური", "ფრანგული"],
  capital: {
    name: "ბერნი",
    population: 148251,
    year: 1234,
  },
  cities: [
    { name: "ციურიხი", population: 965, year: 1534 },
    { name: "ჟენევა", population: 6345, year: 2234 },
    { name: "ბაზელი", population: 3457, year: 234 },
  ],
};
// document.write("<h3>შვეიცარიის ოფიციალური ენებია</h3>");

///// ენების გამოტანა

for (let i = 0; i < country1.languages.length; i++) {
  //   document.write(country1.languages[i] + "</br></br>");
}
// document.write("<h3>შვეიცარიის ქალაქებია</h3>");
for (let i = 0; i < country1.cities.length; i++) {
  //   document.write(country1.cities[i].name + "</br></br>");
}

////////////// product list /////////

const products = [
  {
    name: "product1",
    price: 19.99,
    description: "Description of product 1",
  },
  {
    name: "product2",
    price: 29.99,
    description: "Description of product 2",
  },
  {
    name: "product3",
    price: 39.99,
    description: "Description of product 3",
  },
  {
    name: "product4",
    price: 49.99,
    description: "Description of product 4",
  },
  {
    name: "product5",
    price: 59.99,
    description: "Description of product 5",
  },
];

const container = document.getElementById("product_container");

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  console.log(product.name);

  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const nameElement = document.createElement("h2");
  nameElement.textContent = product.name;

  const priceElement = document.createElement("p");
  priceElement.textContent = "Price : $" + product.price;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;

  productElement.appendChild(nameElement);
  productElement.appendChild(priceElement);
  productElement.appendChild(descriptionElement);

  //   container.appendChild(productElement);
}

products.forEach((product) => {
  const productHTML = `
        <div class="products">
        <h2> ${product.name} </h2>
        <p> Price : $ ${product.price} </h2>
        <p> ${product.description} </h2>
    `;
  container.innerHTML += productHTML;
});

let users = {};

(users.name = "Tom"),
  (user.age = 26),
  (user.display = function () {
    console.log(user.name);
  });

const hasNameProp = "name" in user;

console.log(hasNameProp);

function createUser(pName, pAge) {
  return {
    name: pName,
    age: pAge,
    displayInfo: function () {
      document.write(
        "name" + " " + this.name + " " + "age" + " " + this.age + " "
      );
    },
    driveCar: function (car) {
      document.write(this.name + " " + "drives" + " " + car.name);
    },
  };
}

function createCar(mName, mYear) {
  return {
    name: mName,
    year: mYear,
  };
}

const tom = createUser("Tom", 25);

tom.displayInfo();

const car = createCar("Mazda", 1988);

tom.driveCar(car);

function User(pName, pAge) {
  this.name = pName;
  this.age = pAge;

  this.displayInfo = function () {
    document.write(
      "name" + " " + this.name + " " + "age" + " " + this.age + " "
    );
  };
}

User.prototype.hello = function () {
  document.write(this.name + "says Hello");
};

User.prototype.maxAge = 110;

const tom1 = new User("tom", 20);
tom1.hello();
