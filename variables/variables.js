// REDECLARATION

// var x = 42;
// var x = 2137;
//
// let x1 = 42;
// let x1 = 2137; Uncaught SyntaxError: Identifier 'x1' has already been declared

// const x2 = 2137;
// const x2 = 2137; Uncaught SyntaxError: Identifier 'x2' has already been declared

//REINITIALIZATION

// var x = 42;
// x = 2137;
//
// let x1 = 42;
// x1 = 2137;
//
// const x2 = 42;
// x2 = 2137; Uncaught TypeError: Assignment to constant variable.

// SCOPES - block, function

// block scope — dowolna para klamerek
// {
//     var y = 42;
//     const x = 42;
// }
// console.log(y);
// console.log(x); Uncaught ReferenceError: x is not defined

// function scope — ciało funkcji
// function doSmth() {
//     var y = 42;
//     let x = 42;
// }
// doSmth();
// console.log(y); Uncaught ReferenceError: y is not defined
// console.log(x); Uncaught ReferenceError: x is not defined

// scope — widoczność, dostęp do identyfikatorów (zmienne, funkcje, klasy)

// HOISTING — przenoszenie deklaracji zmiennych (var), funkcji nazwanych i klas na górę aktualnie przetwarzanego zasięgu
// console.log(x);
// var x = 42;
//
// var y;
// console.log(y);
// y = 42;

// doSmth();
//
// function doSmth() {
//     console.log('it works')
// }

// console.log(y);
// let y = 42; Uncaught ReferenceError: Cannot access 'y' before initialization
// TDZ - temporary dead zone
