// closure - dostęp do zmiennych spoza aktualnie wykonywanego zasięgu

// Tworzenie:
// 1. Muszą być minimum 2 funkcje: funkcja outer musi zwracać deklarację funkcji inner
// 2. Funkcja inner musi używać czegoś z funkcji outer (np. zmiennej, funkcji, klasy)

// Zalety:
// 1. Persystencja (trwałość zmiennych)

// zmienne dostępne w closure są zapisywane w obiekcie funkcji (inner)

// function sentence(name) {
//     return function (age) {
//         return `Mam na imię ${name} i mam lat ${age}`;
//     }
// }
//
// console.log(sentence('Jane')(42))
//
// const fullSentence = sentence('Janusz');

// console.log(fullSentence);
// console.dir(fullSentence);

// function uuid(counter = 1) {
//     return function (newCounter = null) {
//         counter = newCounter ?? counter;
//         return counter++
//     }
// }

// const uuid = (counter = 1) => () => counter++
//
// const genUuid = uuid(42);
//
// console.log(genUuid());
// console.log(genUuid());
// console.log(genUuid());
// console.log(genUuid());
// console.log(genUuid());

// function debounce(func, delay) {
//     let timeoutId;
//
//     return (...args) => {
//         clearTimeout(timeoutId);
//
//         timeoutId = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// }
//
// function fetchData(query) {
//     // Symulacja wysyłania zapytania do serwera
//     console.log('Wysyłanie zapytania:', query);
// }
//
// const debouncedFetchData = debounce(fetchData, 300);
//
// debouncedFetchData('Kot');
// debouncedFetchData('Pies');
// debouncedFetchData('Ptak');

