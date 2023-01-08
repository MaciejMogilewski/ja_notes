// Sprawdź, czy tekst to palindrome: kajak, ()(), ())(

// function isPalindrome(text) {
//     return text.toLowerCase() === text.toLowerCase().split('').reverse().join('')
// }

// const isPalindrome = function (text) {
//     return text.toLowerCase() === text.toLowerCase().split('').reverse().join('')
// }

// const isPalindrome = (text) => text.toLowerCase() === text.toLowerCase().split('').reverse().join('');
//
// console.log(isPalindrome('kayak'))
// console.log(isPalindrome('Ala'))
// console.log(isPalindrome('()()'))
// console.log(isPalindrome('())()'))

// Napisz funkcje range
// range(stop) -> stop: 5 [0, 1, 2, 3, 4]
// range(start, stop) -> start: 0, stop: 5 [0, 1, 2, 3, 4]
// range(start, stop, step) -> start: 2, stop: 10, step: 2 [2, 4, 6, 8]
// range(start, stop, step) -> start: 5, stop: 2, step: -1 [5, 4, 3]
// range(start, stop, step) -> start: 5, stop: 2, step: 1 []

function range(start, stop= undefined, step= 1) {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    const temp = [];
    let counter = start;

    while (temp.length < (stop - start) / step){
        temp.push(counter)
        counter += step;
    }

    return temp;
}

// console.log(range(5));
// console.log(range(0,5));
// console.log(range(2,10, 2));
// console.log(range(5,2, -1));


//

