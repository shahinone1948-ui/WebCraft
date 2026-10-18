```javascript
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 20000,
        category: "Electronics",
        inStock: true
    },
    {
        id: 2,
        name: "Phone",
        price: 12000,
        category: "Electronics",
        inStock: true
    },
    {
        id: 3,
        name: "Mouse",
        price: 500,
        category: "Accessories",
        inStock: false
    },
    {
        id: 4,
        name: "Keyboard",
        price: 900,
        category: "Accessories",
        inStock: true
    }
];

console.log("Products:", products);
console.log("First Product:", products[0]);
console.log("Last Product:", products.at(-1));
console.log("Product Count:", products.length);
console.log("Second Product Name:", products[1].name);

products[2].price = 600;

products.push({
    id: 5,
    name: "Monitor",
    price: 3500,
    category: "Electronics",
    inStock: true
});

products.unshift({
    id: 0,
    name: "Headphones",
    price: 1500,
    category: "Accessories",
    inStock: true
});

products.pop();
products.shift();

console.log("Updated Products:", products);


const categories = [
    "Electronics",
    "Accessories",
    "Gaming",
    "Office"
];

console.log(categories.includes("Gaming"));
console.log(categories.includes("Food"));
console.log(categories.indexOf("Accessories"));
console.log(categories.indexOf("Food"));


for (let index = 0; index < products.length; index++) {
    console.log(index, products[index].name);
}

for (const product of products) {
    console.log(product.name, product.price);
}

products.forEach((product, index) => {
    console.log(index, product.name, product.price);
});


const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

const increasedPrices = products.map(product => ({
    ...product,
    price: product.price * 1.10
}));

console.log("Names:", productNames);
console.log("Prices:", productPrices);
console.log("Updated Prices:", increasedPrices);


const expensiveProducts = products.filter(product => product.price > 1000);

const availableProducts = products.filter(product => product.inStock);

const accessoryProducts = products.filter(
    product => product.category === "Accessories"
);

console.log("Expensive Products:", expensiveProducts);
console.log("Available Products:", availableProducts);
console.log("Accessories:", accessoryProducts);


const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

const totalAvailablePrice = products.reduce(
    (total, product) =>
        product.inStock ? total + product.price : total,
    0
);

console.log("Total Price:", totalPrice);
console.log("Available Products Total:", totalAvailablePrice);


const customer = {
    name: "Ahmed",
    age: 25,
    country: "Egypt",
    email: "ahmed@example.com",
    isLoggedIn: true
};

console.log(customer);
console.log(customer.name);
console.log(customer["email"]);

customer.age = 26;
customer.phone = "01012345678";

delete customer.country;

console.log(customer);


customer.sayHello = function () {
    console.log(`Hello, ${this.name}`);
};

customer.sayHello();


customer.address = {
    city: "Cairo",
    street: "Main Street"
};

console.log(customer.address.city);

customer.address.street = "Nile Street";

console.log(customer.address);


const {
    name: customerName,
    age: customerAge
} = customer;

console.log(customerName, customerAge);


const colors = [
    "red",
    "green",
    "blue",
    "yellow"
];

const [firstColor, secondColor] = colors;

console.log(firstColor, secondColor);


const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [
    ...numbers1,
    ...numbers2
];

console.log(combinedNumbers);


const originalUser = {
    name: "Ahmed",
    age: 20
};

const updatedUser = {
    ...originalUser,
    age: 21,
    country: "Egypt"
};

console.log("Original:", originalUser);
console.log("Updated:", updatedUser);


const student = {
    name: "Ahmed"
};

console.log(student.address?.city);

student.address = {
    city: "Alexandria"
};

console.log(student.address?.city);


let username = null;
let score = 0;

console.log(username ?? "Guest");
console.log(score ?? 100);
console.log(score || 100);


let a = 10;
let b = a;

b = 20;

console.log(a, b);


const user1 = {
    name: "Ahmed"
};

const user2 = user1;

user2.name = "Mohamed";

console.log(user1.name, user2.name);


const user3 = {
    ...user1
};

user3.name = "Ahmed";

console.log(user1, user3);


console.log([] === []);
console.log({} === {});

const x = [];
const y = x;

console.log(x === y);


let displayName = "";

console.log(displayName || "Guest");

displayName = "Ahmed";

console.log(displayName || "Guest");


let isLoggedIn = true;

isLoggedIn && console.log("Welcome");

isLoggedIn = false;

isLoggedIn && console.log("Welcome");


console.log("Product Count:", products.length);

products.forEach(product => {
    console.log(product.name);
});


const allNames = products.map(product => product.name);

const expensiveOnes = products.filter(
    product => product.price > 1000
);

const reportTotalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("All Names:", allNames);
console.log("Expensive Products:", expensiveOnes);
console.log("Report Total:", reportTotalPrice);


const copiedProduct = {
    ...products[0],
    name: "Gaming Laptop"
};

console.log(products[0].name);
console.log(copiedProduct.name);


const store = {
    name: "Tech Zone",
    owner: "Ahmed",
    address: {
        city: "Giza"
    },
    isOpen: true,

    printStoreName() {
        console.log(this.name);
    }
};

store.printStoreName();

console.log(store.address?.city);
console.log(store.address?.zipcode ?? "N/A");

store.isOpen && console.log("Store is open");
```
