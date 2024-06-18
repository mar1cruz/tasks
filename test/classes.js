// function Test(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Test.prototype.someFunc = function () {};

// let obj1 = new Test("Yo", 20);
// let obj2 = new Test("Bye", 30);

// console.log(obj1);
// console.log(obj2);

// class Test {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   someFunc() {}
//   arrow = () => {};
// }

// const obj = new Test("Yo", 20);
// console.log(obj);

// class Test2 extends Test {
//   constructor(name, age, city) {
//     super(name, age);
//     this.city = city;
//   }
// }

// const obj2 = new Test2("Bla", 30, "Minsk");
// console.log(obj2);

// class Helper {
//   help1() {}
//   help2() {}
// }

// class SuperHelp extends Helper {
//   help3() {}
// }

// class Test extends SuperHelp {
//   constructor(name, age) {
//     super();
//     this.name = name;
//     this.age = age;
//   }

//   someFunc() {}
//   arrow = () => {};
// }

// let Obj = new Test("monkey", 89);
// console.log(Obj);

// class Test {
//   constructor(name, age) {}
// }

// let obj = new Test("Name", 50);

// console.log(obj);

// class Test {
//   #count = 0;

//   getCurrentCount() {
//     return this.#count;
//   }

//   incrementCount() {
//     this.#count = this.#count + 1;
//   }
// }

// class Test2 extends Test {
//   getCount(){

//   }
// }

class Test {
  #count = 0;

  getCurrentCount() {
    return this.#count;
  }

  incrementCount() {
    this.#count = this.#count + 1;
  }
}
