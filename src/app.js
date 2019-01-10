import subtraction, { square, add } from './utils.js'
import isSeniorCitizen, { isAdult, canDrink} from './person.js'

console.log('App.js is running!');

console.log(square(3));
console.log(add(3,4));
console.log(subtraction(4,3)); // with default naming is not necessary to be same. 
console.log(isAdult(19));
console.log(canDrink(23));
console.log(isSeniorCitizen(65));