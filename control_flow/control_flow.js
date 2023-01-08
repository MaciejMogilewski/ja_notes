// const temperature = 32;

// if (temperature > 22) {
//     console.log('ciepło')
// } else if (temperature < 22) {
//     console.log('zimno')
// } else {
//     console.log('średnio')
// }

// switch (temperature > 22) {
//     case true:
//         console.log('ciepło')
//         break;
//     case false:
//         console.log('zimno')
//         break;
//     default:
//         console.log('średnio')
// }

// const grade = 4;
//
// switch (grade) {
//     case 1:
//         console.log('pała');
//         break;
//     case 2:
//         console.log('dopuszczalny');
//         break;
//     case 3:
//         console.log('dostateczny');
//         break;
//     case 4:
//         console.log('dobry');
//         break;
//     case 5:
//         console.log('bardzo dobry');
//         break;
//     default:
//         console.log('niepoprawna ocena')
// }

const names =['ala', 'ola', 'ela', 'ula'];
const namesUpper = [];

// for (let i=0; i < names.length; i++) {
//     namesUpper.push(names[i][0].toUpperCase() + names[i].slice(1));
// }
//
// console.log(namesUpper);

// const max = 10;
//
// for (let i = 0; i < max; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },0)
// }
//
// for (var i = 0; i < max; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },0)
// }

// for (const name of names) {
//     namesUpper.push(name[0].toUpperCase() + name.slice(1))
// }
//
// console.log(namesUpper);

// for (let i = 0; i < names.length; i++){
//     ((name_) => {
//         const name = name_;
//         namesUpper.push(name[0].toUpperCase() + name.slice(1));
//     })(names[i]); // IIFE - immediately invoke function expression
// }
//
// console.log(namesUpper);

// let index = 0;
//
// while (index < names.length){
//     namesUpper.push(names[index][0].toUpperCase() + names[index].slice(1));
//     // index++;
//     // index = index + 1;
//     // index -=- 1
//     // index = index - (-1)
//     index += 1;
// }
//
// console.log(namesUpper);

// let index = 0
//
// do {
//     namesUpper.push(names[index][0].toUpperCase() + names[index].slice(1))
// } while (index < names.length)
//
// console.log(namesUpper);

// const namesObj = {
//     a: "ala",
//     b: "ola",
//     c: "ela",
//     d: "ula"
// }
//
// const namesObjUpper = {}
//
// for (const key in namesObj){
//     namesObjUpper[key] = namesObj[key][0].toUpperCase() + namesObj[key].slice(1);
// }
//
// console.log(namesObjUpper);

// const namesUpper2 = names.map((name) => name[0].toUpperCase() + name.slice(1));
// console.log(namesUpper2);
