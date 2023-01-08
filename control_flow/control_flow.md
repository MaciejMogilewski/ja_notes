# Control Flow

Domyślnie program jest wykonywany od góry do dołu, instrukcja po instrukcji, od lewej do prawej.

---

## Conditions (if, switch):
- wykonanie zbioru instrukcji bądź nie

```js

if (condition){
    // condition -> true
}

if (condition){
    // true
} else if (condition2){
    // condition -> false
    // condition -> true
}

if (condition){
    // condition -> true
} else {
    // condition -> false
}

switch (value){
    case 'a':
        // condition === 'a'
        break;
    case 'b':
        // condition === 'b'
        break;
    default:
        // condition !== 'a' and condition !== 'b'
}

```

## Loops (for, for in, for of, while, do while):
- wykonanie zbioru instrukcji zero lub więcej razy
- for - kiedy wiemy ile iteracji (najczęściej iterujemy po kolekcjach)
- while - kiedy nie wiemy ile razy (oparte o warunek)

```js

for (let i = 0; condition; i++) {
    // dopóki condition jest true
}

const obj = {a: 1, b: 2, c: 3}
for (const property in obj) {
    // dopóki są wartości w obiekcie
}

const array = ['a', 'b', 'c'];
for (const elemnt of array) {
    // dopóki są wartości w tablicy
}

while (condition) {
    // dopóki condition jest true
}

do {
    // minimum raz, dopóki condition jest true
} while (condition);

```