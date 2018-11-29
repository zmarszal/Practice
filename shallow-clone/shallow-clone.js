const healthyFoods = {
  vegetable: 'carrot',
  snack: 'nuts',
  fruit: 'apple'
};

const deliciousFoods = {
  hungry: 'Cheeseburger',
  veryHungry: 'Pizza',
  dessert: 'Cheesecake'
}

//

let foods = {};

foods = Object.assign(foods, healthyFoods, deliciousFoods);

console.log(foods);

const warm = ['Hawaii', 'Australia'];
const cold = ['Iceland', 'Greenland'];

// create the variables `warmCountries` and `coldCountries`, assign a copy of the warm and cold arrays using the spread operator.
// after the `warmCountries` and `coldCountries` are created, use the code below to compare the arrays to their originals, the expressions should return false.

let warmCountries = [...warm];
let coldCountries = [...cold];







// Use the code below when the `warmCountries` and `coldCountries` variables are created
console.log(warm === warmCountries); // false - false because warmCountries is a COPY of the warm array
console.log(cold === coldCountries); // false - false because coldCountries is a COPY of the cold array










const wheelTotal = 4;
const color = 'red';


const bike = {
  wheelTotal,
  color,
  beginPedaling() {
    console.log('pedaling!')
  }
}

console.log(bike.wheelTotal, bike.color);
bike.beginPedaling();



