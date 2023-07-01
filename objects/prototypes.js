// Dodaj capitalize do tekstó w js
// "ala ma kota".capitalize() => "Ala ma kota"

String.prototype.capitalize = function() {
    return this[0].toUpperCase() + this.slice(1);
}

// console.log("ala ma kota".capitalize());

// Zaimplementuj map do tablicy

Array.prototype.myMap = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

// console.log([1, 2, 3].myMap((a) => a * 2))

// zaimplementuj filter do tablicy

Array.prototype.myFilter = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray
}

// console.log([1, 2, 3].myFilter((a) => a < 3))

// zaimplementuj reduce

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc
}

// console.log([1, 2, 3].myReduce((a, b) => a + b))

// myMap in place
// modyfikuje oryginalny obiekt, zazwyczaj nic nie zwraca

Array.prototype.mapInPlace = function(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i], i, this);
    }
}

const arr = [1, 2, 3];

arr.mapInPlace((a) => a * 2)
// console.log(arr);