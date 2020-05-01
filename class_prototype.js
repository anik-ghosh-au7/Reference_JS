let Person_C = class {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getDeatils() {
        return `${this.name} :: ${this.id}`;
    }
};

let anik = new Person_C('Anik', 1009);
console.log(anik.getDeatils(), '\n', anik.name);

// Employee prototype links to Person prototype
let Employee_C = class extends Person_C {
    constructor(name, id, salary) {
        super(name, id);
        this.salary = salary;
    }
    // exsist on prototype of Employee
    employeeInfo() {
        return `${this.name} :: ${this.id} :: ${this.salary}`;
    }
};

let ghosh = new Employee_C('Ghosh', 1009, 9900000);
console.log(ghosh.employeeInfo());



// --------------------------------------------------------------------


let Person_P = function(name, id){
    this.name = name;
    this.id = id;
};
Person_P.prototype.getDeatils = function (){
    return `${this.name} :: ${this.id}`;
};

let akash = new Person_P('Akash', 1010);
console.log(akash.getDeatils(), '\n', akash.name);

let Employee_P = function(name, id, salary){
    // Substitue of super()
    Person_P.call(this, name, id);
    this.salary = salary; 
};

// Substitute of extends
Object.setPrototypeOf(Employee_P, Person_P.prototype);
Employee_P.prototype = Object.create(Person_P.prototype);
// Object.getPrototypeOf(Person_P, Employee_P.prototype);
Employee_P.prototype.employeeInfo = function(){
    return `${this.name} :: ${this.id} :: ${this.salary}`;
};

let dutta = new Employee_P('Dutta', 1010, 9000000);
console.log(dutta.employeeInfo());
console.log(dutta.getDeatils());

