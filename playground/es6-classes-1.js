class Person {
	constructor(name = 'Anonymmous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getDescription() {
		return `${this.name} is ${this.age} years old.`;
	}

	getGreeting() {
		return `Hi. I am ${this.name}!`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description+= ` Their major is ${this.major}.`;
		}

		return description;
	}
}

const mikeStudent = new Student('Mike',22, 'Computer Science');
console.log(mikeStudent.getDescription());

const otherStudent = new Student();
console.log(otherStudent.getDescription());

class Traveller extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();

		if (this.homeLocation) {
			greeting+= ` I'm visiting from ${this.homeLocation}`;
		}

		return greeting;
	}
}

const traveller1 = new Traveller('Mike', 22, 'Delhi');
console.log(traveller1.getGreeting());

const traveller2 = new Traveller();
console.log(traveller2.getGreeting());
