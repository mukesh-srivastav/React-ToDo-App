// arguments object - no longer bound with arrow functions.

const add = (a,b) => {
	// console.log(arguments);
	return a + b;
}

console.log(add(55, 1, 1000));
//this keyword - no longer bound. Available to arrow function.

const user = {
	name: 'Mike',
	cities: ['Mumbai', 'Delhi', 'Bangalore'],
	printPlacesLived() {
		const cityMessages = this.cities.map((city) => {
			return this.name + " has lived in " + city;
		});

		return cityMessages;
	}
}

console.log(user.printPlacesLived());


const multiplier = {
	numbers: [1,3,5,7,9],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number*this.multiplyBy);
	}
};

console.log(multiplier.multiply());
