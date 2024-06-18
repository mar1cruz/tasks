// console.dir(function () {});
// console.dir(Function);
// console.dir(() => {});
// console.dir(() => {});

// function f() {}

// console.log(typeof f.prototype);

// console.dir(Array);
// console.dir([]);

// const arrayPrototypeObj = Object.getPrototypeOf([]);
// console.log(Array.prototype === arrayPrototypeObj);
// console.log(Array.prototype === [].__proto__);

// const obj = { name: "Uo" };

// console.log(obj);
// console.log(obj.__proto__);

// class Test {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// Test.prototype.sayHi = function () {};

// const obj = new Test("Igor");

// console.dir(Test);
// console.log(obj);

// obj.__proto__.someFunc = function () {};

// const obj2 = new Test("Yo");

// console.log(obj2);

// class Test {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const obj = new Test("Igor");

// const objPrototype = Object.getPrototypeOf(obj);
// objPrototype.setSomeProperty = function () {};

// const obj2 = new Test("Yo");

// console.log(obj2);

// class Test {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// // Test.prototype = { f: function () {} };
// Test.prototype.f = function () {};

// const obj = new Test("Igor");

// let objPrototype = Object.getPrototypeOf(obj);
// objPrototype = { f: function () {} };
// // obj.__proto__ = { f: function () {} };
// const obj2 = new Test("Yo");

// console.log(obj);
// console.log(obj2);

// class Test {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class SuperTest extends Test {
//   constructor(name) {
//     super(name);
//   }

//   getName() {
//     return "";
//   }
// }

// let obj = new SuperTest("Yo");
// console.log(obj.__proto__.__proto__.__proto__);

// function Test(name) {
//   this.name = name;
// }

// Test.prototype = {
//   constructor: Test,
//   getName: function () {},
// };

// Object.defineProperty(Test, "prototype", { writable: false });

// Test.prototype = { f: function () {} };

// let obj = new Test("Yo");
// console.log(obj);

// function Test(name) {
//   this.name = name;
// }

// Test.prototype.getName = function () {
//   console.log(this.name);
// };

// function SuperTest(name) {
//   Test.call(this, name);
// }

// SuperTest.prototype = Object.create(Test.prototype, {
//   constructor: {
//     value: SuperTest,
//   },
//   getName: {
//     value: function () {},
//   },
// });

// let obj = new SuperTest("wdasd");
// console.log(obj);

// Function.prototype.myBind = function (ctx, ...arg1) {
//   const context = this;
//   console.log(a);

//   return function (...arg2) {
//     return context.apply(ctx, ...arg1, ...arg2);
//   };
// };

// Function.prototype._bind = function (ctx, ...arg1) {
//   ctx.context = this;

//   return function (...arg2) {
//     return ctx.context(...arg1, ...arg2);
//   };
// };

// const a = {
//   name: "dimas",
//   showName() {
//     console.log(this.name, ...arguments);
//   },
// };

// const b = {
//   name: "andry",
// };

// const c = {
//   name: "kolya",
// };

// a.showName._bind(b)();

