function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function () {
	console.log(`Hello, my name is ${this.name}.`);
};

function Student(name, grade) {
	Person.call(this, name);
	this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayGrade = function () {
	console.log(`I am in grade ${this.grade}.`);
};

const john = new Student('John Doe', 12);
john.sayHello(); // Hello, my name is John Doe.
john.sayGrade(); // I am in grade 12.
