class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip() {
    const monthlySalary = this.salary / 12;
    return `
        Employee ID: ${this.id}
        Name: ${this.firstName} ${this.lastName}
        Tax ID: ${this.taxId}
        Pay: ${monthlySalary.toFixed(2)} 
        `;
  }
}

const employee1 = new Employee(1, "Mark", "Jacob", 12345, 48000);
const employee2 = new Employee(2, "Jeff", "Lung", 5953445, 32000);
const employee3 = new Employee(3, "Martha", "Jin", 1234, 58000);

console.log(employee1.generatePaySlip());

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }
  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }
  removeManagedEmployee(id) {
    let remainingEmployees = this.managedEmployees.filter(
      (employee) => employee.id !== id
    );
    this.managedEmployees = remainingEmployees;
  }
}

const manager = new Manager(7, "Lydia", "Late", 12356, 78000);

manager.addManagedEmployee(employee1);
manager.addManagedEmployee(employee2);
manager.addManagedEmployee(employee3);

console.log(manager);

manager.removeManagedEmployee(2);
console.log(manager);

manager.removeManagedEmployee(3);
console.log(manager);

