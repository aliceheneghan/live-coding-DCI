class ParentClass {
  constructor() {
    this.name = "bla";
  }
  print() {
    console.log("this is parent");
  }
}

class ChildClass extends ParentClass {
  print() {
    console.log("this is child");
  }
}

const parent = new ParentClass();
const child = new ChildClass();

parent.print();
child.print();
console.log(parent.name);
console.log(child.name);
