// higher order function - funkcja, która przyjmuje bądź zwraca deklaracje innej funkcji
// to jest możliwe, gdy funkcje to 'first class citizen' innymi słowami są obiektami

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function sentence(cb, text) {
    return cb(text);
}

// console.log(sentence(capitalize, 'ala ma kota'))

// function composition

function reverse(text) {
    return text.split('').reverse().join('');
}

// console.log(sentence(capitalize, 'ala ma kota'))
// console.log(sentence(reverse, 'ala ma kota'))

// console.log(sentence(reverse, sentence(capitalize, 'ala ma kota')))

// IIFE - immediately invoke function expression
// do tej pory w CommonJS, coś jak namespacing (wzorzec projektowy module i module reveal)
// module - zamkniecie wszystkich identyfikatorow, zeby nie byly dostepne na zewnatrz
// module reval - to samo, tylko wystawia API

// const moduleReveal = (() => {
//    const queue = [];
//
//    function add(item) {
//        queue.push(item);
//    }
//
//    function remove() {
//        queue.shift();
//    }
//
//    function show() {
//        return queue;
//    }
//    return {add, remove, show};
// })()
//
// moduleReveal.add(1)
// moduleReveal.add(2)
// moduleReveal.add(3)
// console.log(moduleReveal.show());

// przykład
for (var i = 0; i < 10; i++) {

    ((z) => {
        setTimeout(() => {
            console.log(z);
        }, 0)
    })(i)
}
