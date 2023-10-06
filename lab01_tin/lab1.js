// a)	Use of a for loop
function print_to(){
    for(let i = 1 ; i <= 3 ; i++ ){
        console.log(`Number: ${i}`)
    }
}

// b) Use of a while loop
function while_print_to(){
    let i = 7
    while(i <= 13){
        console.log(`Number from while: ${i}`)
        i++
    }
}

// c) Use of a for .. in loop
function printPlane(plane){
    for (const attribute in plane){
        console.log(`The plane's ${attribute} is ${plane[attribute]}`)
    }
}
const myPlane = {
    manufacturer: 'Lockheed Martin',
    model: 'F-16 Fighting Falcon',
    year: 1973,
    color: 'Navy Grey'
};

// d) Use of a for .. of loop
function printMyDrinksTonight(drinks){
    for (const choice of drinks){
        console.log(`I will drink ${choice} tonight!!!`)
    }
}

const myChoices = ['Classic Margarita', 'Mojito', 'Moscow Mule']

// e) Use of an if instruction
function is_it_Negative(num) {
    if (num < 0) {
        console.log("The number is negative!");
    }
}


// f) A function taking two or more parameters
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return 'Error: Both variables have to be numbers!';
    }
}

// g) Function taking a variable amount of parameters
function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// h) A function taking a function as a parameter
function operator(a, b, operation){
    return operation(a, b);
}

// i) Using a constructor to create objects
function Employee(name, department, position) {
    this.name = name;
    this.department = department;
    this.position = position;
    this.addUser = function() {
        console.log(`Employee ${this.name}, added to ${department} deparmeent with ${position} position.`);
    };
}


// j) Using a class to create an object
class Drone {
    constructor(type, model, manufacturer) {
        this.type = type;
        this.model = model;
        this.manufacturer = manufacturer;
    }

    review_type() {
        console.log(`${this.type} is the best!.`);
    }
}

// Driver code

// a) Using for loop
console.log("Using for loop:");
print_to();

// b) Using while loop
console.log("\nUsing while loop:");
while_print_to();

// c) Using for .. in loop
console.log("\nUsing for .. in loop:");
printPlane(myPlane);

// d) Using for .. of loop
console.log("\nUsing for .. of loop:");
printMyDrinksTonight(myChoices);

// e) Using if instruction
console.log("\nUsing if instruction:");
is_it_Negative(-5);

// f) Function taking two parameters
console.log("\nFunction with two parameters:");
console.log(addNumbers(3, 5));
console.log(addNumbers(3, "five"));

// g) Function taking a variable amount of parameters
console.log("\nFunction with variable parameters:");
console.log(sum(1, 2, 3, 4));

// h) Function taking a function as a parameter
console.log("\nFunction taking function as parameter:");
const sumResult = operator(4, 5, (a, b) => a + b);
const mulResult = operator(4, 5, (a, b) => a * b);
console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${mulResult}`);

// i) Using a constructor to create objects
console.log("\nUsing a constructor to create objects:");
const alice = new Employee("Alice", "Engineering", "Software Developer");
alice.addUser();

// j) Using a class to create an object
console.log("\nUsing a class to create an object:");
const myDrone = new Drone("Quadcopter", "DJI Mavic 2 Pro", "DJI");
myDrone.review_type();
