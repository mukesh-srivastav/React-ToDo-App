const square = function (x) {
	return x*x;
}

console.log(square(3));

// const squareArrow = (x) => {
// 	return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// Regular arrow function
// const getFirstName = (name) => {
// 	return name.split(' ')[0];
// }

// shorthand syntax for arrow function
const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Mike Smith'));
