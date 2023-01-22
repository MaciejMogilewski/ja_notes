# Javascript

## Variables

| x | var | let | const |
| --- | --- | --- | --- |
| redeclaration | yes | no | no |
| reassignment | yes | yes | no |
| hoisting | yes | no | no |
| block scope | no | yes | yes |
---
### Hoisting
- moving declarations of var, named function and class to the top of the current scope
---
### Shallow vs Deep Copy (References concept)

```js
const a = [[1, 2], [3, 4]];
const b = a;
b[0][0] = 10;
// console.log(a); // [ [ 10, 2 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 2 ], [ 3, 4 ] ]

b[0] = [10, 20];
// console.log(a); // [ [ 10, 20 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 20 ], [ 3, 4 ] ]

const c = [...a]; // [ [ 10, 20 ], [ 3, 4 ] ]
c[0][0] = 100;
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 20 ], [ 3, 4 ] ]

c[0] = [100, 200];
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 200 ], [ 3, 4 ] ]


const d = JSON.parse(JSON.stringify(a));
d[0][0] = 1000;
console.log(d); // [ [ 1000, 200 ], [ 3, 4 ] ]
console.log(a); // [ [ 100, 200 ], [ 3, 4 ] ]
```
---
## Functions
1. Named funciton
2. Anonymus funciton
3. Arrow function
---
4. Function expression

---
 - NaN - Not a (correct) Number

 ## Array (object subtype)
 ### methods:
 1. `[1, 2, 3].contact([[4, 5, 6]])` - concat - łączy dwie tablice
 2. `[1, 2, 3, NaN].includes(2)` - includes (returns true of false) - test if element exist in array, works with NaN
 3.  `[1, 2, 3, NaN].indexOf(2)` - indexOf (returns index of element or minus 1 if not found) - not working with NaN
 4. `[1, 2, 3].join(', ')` - join (returns string separated by separator)
5. `[1, 2, 3].pop()` - pop (returns LAST element and removes it from array)
6. `[1, 2, 3].push(4)` - push (adds element to the end of array)
7. `[1, 2, 3].shift()` - shift (returns FIRST element and removes it from array)
8. `[1, 2, 3].unshift(666)` - unshift (adds element to the beginning of array)
9. `[1, 2, 3].slice(1, 3)` - slice (returns new array with elements froms start to end, by INDEX)
10. `[1, 2, 3].splice()` - splice (returns removed elements and adds new elements in-place)
11. `[1, 2, 3].reverse()` - reverse (returns new array with elements in reversed order)
12. `[1, 2, 3].sort()` - sort (returns new array with elements sorted)
13. `[1, 2, 3].toString()` - toString (returns string representation of array)
14. `[1, 2, 3].valueOf()` - valueOf (returns array)
15. `[1, 2, 3].map(x => x * 2)` - map (returns new array with elements tranformed by callback) - transform array
16. `[1, 2, 3].filter(x => x > 1)` - filter (returns new array with elements filtered by callback) - delete elements
17. `[1, 2, 3].reduce((acc, cur) => acc + cur)` - reduce  (returns single value) - sum - jedyny sensowny sposób sumowania tablic - aggregate array
18. `[1, 2, 3].reduceRight((acc, cur) => acc + cur)` - reduceRight (returns single value) - sum - aggregate array
19. `[1, 2, 3].forEach(x => console.log(x))` - forEach - (returns undefined) - iterate array
20. `[1, 2, 3].some()` - some (returns true or false) - test if any element passes test
21. `[1, 2, 3].every()` - every - (returns true or false) - test if all elements passes test
22. `[1, 2, 3].find()` - find (returns first element that passes test) - find element
23. `[1, 2, 3].findIndex(x => x > 1)` - findIndex (returns index of first element that passes test) - find element index
24. `[1, 2, 3].fill()` - fill - (returns new array with elements replaced) - replace elements
25. `[1, 2, 3].copyWithin(1, 2)` - copyWithin (returns new array with element copied) - copy elements
26. `[1, 2, 3].entries()` - entries (returns iterator) - iterate array
27. `[1, 2, 3].keys()` - keys (returns iterator) - iterate array
28. `[1, 2, 3].values()` - values (returns iterator) - iterate array
29. `[1, 2, 3].flat(<how many levels>)` - flat - (returns new array with elements flattened) - flatten array
30. `[1, 2, 3].flatMap(x => [x, x * 2])` - flatMap (returns new array with elements transformed by callback) - transform array

---
## Function Prototypes
### Map prototype
```javascript
function callback(element=1, id=0, array=[1, 2, 3]){
    return 'New value';
}

const newArray = [1,2,3].map((callback))
// ['New value', 'New value', 'New value']
```

### Reduce prototype
```javascript
const initialValue = 0;
const callback = (accumulator=array[0], currentElement=array[1], id=0, array=[1, 2, 3]) => {
    const newAccumulator = accumulator + currentElement;
    return newAccumulator;
}

const newAggregationValue = [1, 2, 3].reduce(callback_, initialValue)
// ['New value', 'New value', 'New value']
```
---
## Copying arrays

### Shallow copy
```js
const x = [1, 2, 3];

const y = [...x];
const z = x.slice();
const w = x.concat();
const y = Array.from(x);
```

### Deep copy
```js
const x = [1, 2, 3];

const y = JSON.parse(JSON.stringify(x));
const z = Object.assign([], x)
```
---
### Checking if array is array
```js
const x = [1, 2, 3, 4]

Array.isArray(o) //returns true or false
```
---