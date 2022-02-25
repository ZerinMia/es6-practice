// 1.work 
let father = 'Sobahan Ponir';
father = 'Jahanara Begum';
const mother = 'Jahanara Begum';
const myName = 'Sumaiya Zerin'
const college = 'Shiddeshwari Girls College'

//2.a. use variable template string
const myBio = `Hello guys my name is ${myName} and i study in ${college}.My father name is ${father} and my cute mom name is ${mother}.`;

// 2.b: use object property 
const monitor = { name: 'lg', price: '14000', refreshRate: '70hz' };
const mymonitor = `I have ${monitor.name} monitor whice price is ${monitor.price} and refresh rate is ${monitor.refreshRate}.whice is good enough for me.`;

//3.a: with one parameter.will return the number after dividing by 5 
const dividing = x => x / 5;
// B: with tow parameters. will add two to each numer and then multiply the result.
const A = (a, b) => (a + 2) * (b + 2);

//C:three parameters . will multiply all three parameters
const multiplication = (x, y, z) => x * y * z;

// D: with two parameters but it will be a multi line arrow function .will add two to each number and then multiply that and make sure that you return the result.
const AddMultiplycation = (x, y) => {
    const add1 = x + 2;
    const add2 = y + 2;
    const multiple = add1 * add2;
    return multiple;
}
//E: home work:javascript function declaration vs arrow function 

// 5. aray of numbers.and then map to get each elements multiplied by 5. must us arrow function 
const onko = [2, 4, 6, 8, 10];
const multiNum = onko.map(number => number * 5);

// 6. [challenging] numbers of array .get odd numbers by using filter with arrow function 
const numbers = [3, 42, 64, 35, 676, 76, 234, 76, 34, 98, 25];
const filter = numbers.filter(number => number % 2 != 0);

//7.[challenging] array of objects (ex. products). use find to get the object with price 5000.
const products = {
    name: 'lg',
    configure: 'intel core i-5 11th gen',
    price: '5000'
}
const find = products.find(products.price);

// 10. just a write a function with three parameters and the last parameter will have a default parameter and will return the all three parameters. 
const add = (x, y, z = [7]) => x + y + z;
console.log(add(2, 3));