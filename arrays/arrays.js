// const data = [
//     {
//         name: 'pawel',
//         age: 37,
//         city: 'krakow',
//         hobbies: ['js', 'python', 'drugs']
//     },
//     {
//         name: 'Filip',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['js', 'sleep', 'eat']
//     },
//     {
//         name: 'andrzej',
//         age: 32,
//         city: 'krakow',
//         hobbies: ['programming','banjo','guitar']
//     },
//     {
//         name: 'maciek',
//         age: 35,
//         city: 'katowice',
//         hobbies: ['alcohol', 'programing', 'cars']
//     },
//     {
//         name: 'bartek',
//         age: 21,
//         city: 'Drogomyśl',
//         hobbies: ['strusie', 'js']
//     },
//     {
//         name: 'oliver',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['technology', 'music production', 'bajking 🚴🏻']
//     },
//     {
//         name: 'jakub',
//         age: 20,
//         city: 'krakow',
//         hobbies: ['gaming', 'alcohol', 'sleeping']
//     },
//     {
//         name: 'maria',
//         age: 24,
//         city: 'warsaw',
//         hobbies: ['books', 'volleyball', 'programming']
//     }
// ]

// function avgAge(items) {
//     let totalAge = 0;
//
//     for (const item of items) {
//         totalAge += item.age;
//     }
//
//     return totalAge / items.length;
// }

// function avgAge(persons) {
//     return persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length;
// }

// function avgAge(persons) {
//     const ages = persons.map((person) => person.age);
//     return ages.reduce((acc, ce) => acc + ce) / persons.length;
// }



// console.log(avgAge(data));

// function avgAgePeopleFromKrakow(items) {
//     let totalAge = 0;
//     let counter = 0;
//
//     for (let i = 0; i < items.length; i++){
//         if (items[i].city.toLowerCase() === 'krakow'){
//             counter++;
//             totalAge += items[i].age;
//         }
//     }
//
//     return totalAge / counter;
// }

// function avgAgeKrakow(persons) {
//     const personsKrakow = persons.filter((person) => person.city.toLowerCase() === 'krakow')
//     return personsKrakow.reduce((acc, ce) => acc + ce.age, 0) / personsKrakow.length;
// }

// function avgAgeKrakow(persons) {
//     return persons
//         .filter((person) => person.city.toLowerCase() === 'krakow')
//         .reduce((acc, ce) => acc + ce.age, 0) /
//         persons.filter((person) => person.city.toLowerCase() === 'krakow').length
// }

// console.log(avgAgePeopleFromKrakow(data));

// function getAllNames(elements) {
//     const names = [];
//     let index = 0;
//
//     while (index < elements.length) {
//         names.push(elements[index].name);
//         index++;
//     }
//
//     return names;
//
// }

// function getAllNames(persons) {
//     return persons.map((person) => person.name )
// }

// const getAllNames = (persons) => persons.map((person) => person.name)
// const getAllNames = (persons) => persons.map((person) => capitalize(person.name))

// console.log(getAllNames(data));

// function capitalize(name) {
//     return name[0].toUpperCase() + name.slice(1);
// }

// const capitalize = (name) => name[0].toUpperCase() + name.slice(1)

// function getPeopleWhoLovesJS(elements) {
//     const names = [];
//
//     for (const element of elements){
//         if (element.hobbies.includes('js')){
//             names.push(capitalize(element.name));
//         }
//     }
//
//     return names.join(', ');
// }

// const getPeopleWhoLovesJs = (elements) => {
//     const peopleWhoLovesJs = elements.filter((element) => element.hobbies.includes('js') )
//     return peopleWhoLovesJs.map((element) => capitalize(element.name)).join(', ')
// }

// const getPeopleWhoLovesJs = (elements) => elements
//     .filter((element) => element.hobbies.includes('js'))
//     .map((element) => capitalize(element.name))
//     .join(', ')

// const getPeopleWhoLovesJs = (elements) => elements
//     .reduce((acc, ce) => ce.hobbies.includes("js") ? acc + capitalize(ce.name) + ", " : acc, "")
//     .slice(0, -2)

// console.log(getPeopleWhoLovesJS(data));

// function getAgeOfPeopleWithNameLengthGreaterThan5(persons) {
//     const ageArray = [];

    // for (let i = 0; i < persons.length; i++){
    //     if (persons[i].name.length > 5){
    //         ageArray.push(persons[i].age);
    //     }
    // }

//     for (const person of persons){
//         if (person.name.length > 5){
//             ageArray.push(person.age);
//         }
//     }
//
//     return ageArray;
// }

// const getAgeOfPeopleWithNameLengthGreaterThan5 = (persons) => persons
//     .filter((person) => person.name.length > 5)
//     .map((person) => person.age)

// console.log(getAgeOfPeopleWithNameLengthGreaterThan5(data));

// CZĘŚCIOWO IMPERATYWNA
// const checkDataIncludesName = (items, name) => {
//     for (const item of items) {
//         if (item.name.toLowerCase() === name.toLowerCase()) {
//             return true
//         }
//     }
//     return false
// }

// DEKLARATYWNA
// const checkDataIncludesName = (items, name) => items
//     .filter((item) => item.name.toLowerCase() === name.toLowerCase())
//     .length > 0

// const checkDataIncludesName = (items, name) => items
//     .some((item) => item.name.toLowerCase() === name.toLowerCase())

// const checkAdult = (items) => {
//     for (const item of items) {
//         if (item.age <= 18) {
//             return false
//         }
//     }
//     return true
// }

// const checkAdult = (items) => items
//     .every((item) => item.age >= 18)

// const checkAdult = (items) => !items
//     .some((item) => item.age <= 18)

// const getAllHobbies = (items) => {
//     const allHobbies = []
//
//     for (const item of items) {
//         for (const hobby of item.hobbies) {
//             allHobbies.push(hobby)
//         }
//     }
//     return allHobbies
// }

// const getAllHobbies = (items) => items
//     .map((item) => item.hobbies)
//     .flat()

// const getAllHobbies = (items) => items
//     .flatMap((item) => item.hobbies)

// const getAllHobbies = (items) => items
//     .reduce((acc, ce) => [...acc, ...ce.hobbies], [])

// const getAllUniqueHobbies = (items) => new Set(items.flatMap((item) => item.hobbies))

// const getAllUniqueHobbies = (items) => items
//     .reduce((acc, ce) => new Set([...acc, ...ce.hobbies]), new Set())

// const x = [{pawel: 20}, {filip: 15}]

// const getCustomObject = (items) => {
//     const result = []
//
//     for (const item of items) {
//         let counter = 0
//         for (const hobby of item.hobbies) {
//             counter += hobby.length
//         }
//         result.push({[item.name]: counter})
//     }
//     return result
// }

// const getCustomObject = (items) => items
//     .map((item) => ({
//         [item.name]: item.hobbies.join('').length
//     }))
//
// const data = [
//     {
//         name: 'Shrek',
//         age: 106,
//         offsprings: 3,
//         city: 'the Swamp',
//         hobbies: ['swamp', 'eating']
//     },
//
//     {
//         name: 'Fiona',
//         age: 23,
//         offsprings: 3,
//         city: 'the Swamp',
//         hobbies: ['singing', 'shrek']
//     },
//
//     {
//         name: 'Donkey',
//         age: 22,
//         offsprings: 5,
//         city: 'Far Far Away',
//         hobbies: ['dragons', 'shrek']
//     },
//     {
//         name: 'Dragon',
//         age: 1250,
//         offsprings: 5,
//         city: 'Far Far Away',
//         hobbies: ['makeup', 'towers']
//
//     },
//     {
//         name: 'Lord Farquaad',
//         age: 571,
//         offsprings: 0,
//         city: 'Duloc',
//         hobbies: ['power', 'mirrors']
//
//     },
//     {
//         name: 'Puss in Boots',
//         age: 20,
//         offsprings: 3,
//         city: 'Far Far Away',
//        hobbies: ['gazpacho', 'working']
//     }
// ]
//
// // 1. Podaj imiona postaci z najwieksza liczba dzieci
//
// function getOffsprings(elements) {
//     const sorted = elements.sort((a, b) => b.offsprings - a.offsprings)
//     const max = sorted[0].offsprings
//
//     return sorted.filter((item) => item.offsprings === max).map((item) => item.name)
// }
//
// // 2. Podaj imie pradawnego najstarszego stworzenia
//
// function getNameWithMaxAge(elements) {
//     const sorted = elements.sort((a, b) => a.age - b.age)
//
//     return sorted.at(-1).name
// }
//
// const getNameWithMaxAge = (elements) => elements
//     .sort((a, b) => b.age - a.age)
//     .map((element) => element.name)[0]
//
// // 3. Podaj imiona postaci, ktore kochaja Shreka
// const getWhoLoveShrek = (elements) => elements
//     .filter((element) => element.hobbies.includes('shrek'))
//     .map((element) => element.name)


// const trucks = [
//     {
//         truck: "Scania",
//         hp: "560",
//         truck_driver: "Janusz",
//         weight: 40000,
//         favourite_meal: ["Pizza", "Burger", "Fries"]
//     },
//     {
//         truck: "Renault",
//         hp: "420",
//         truck_driver: "Jarek",
//         weight: 35000,
//         favourite_meal: ["Kebab", "Burger", "Fries"]
//     },
//     {
//         truck: "Volvo",
//         hp: "700",
//         truck_driver: "Zenek",
//         weight: 37000,
//         favourite_meal: ["Kebab", "Burger", "Chciken"]
//     },
//     {
//         truck: "Mercedes",
//         hp: "460",
//         truck_driver: "Jurek",
//         weight: 16000,
//         favourite_meal: ["Bigos", "Burger", "Fries"]
//     },
//     {
//         truck: "Man",
//         hp: "440",
//         truck_driver: "Donald",
//         weight: 20000,
//         favourite_meal: ["Pizza", "Steak", "Ice cream"]
//     },
//     {
//         truck: "Iveco",
//         hp: "380",
//         truck_driver: "Antoni",
//         weight: 25000,
//         favourite_meal: ["Pizza", "Steak", "Spaghetti"]
//     },
// ]
//
// // 1. Wyświetl nazwy ciężarówek posortowane według wagi od najmniejszej do najwiekszej.
// function trucksFromMinToMaxWeight(elements) {
//     const sorted = elements.sort((a, b) => a.weight - b.weight)
//
//     return sorted.map((element) => element.truck)
// }
//
// // 2. Wyświetl ciężarówki z mocą powyżej 450 hp i imiona szoferów.
// function trucksWithHpOver450(elements) {
//     const over450 = elements.filter(({hp}) => parseInt(hp) > 450)
//
//       return   over450.map(({truck, truck_driver}) => [truck, truck_driver]);
// }
//
// // 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.
// function nameStartingJAndFavouriteMeal(elements) {
//     const nameStartingJ = elements.filter((element) => element.truck_driver.toLowerCase().includes('j'[0]))
//
//     return nameStartingJ.map(({truck_driver, favourite_meal}) => [truck_driver, ...favourite_meal] )
// }



const ksw = [
    {
        name: "Damian Janikowski",
        height: "180.00cm",
        arm_range: "180.00cm",
        weight: "83,9KG",
        win_streak: {
            win: 7,
            loss: 5,
            draw: 0
        },
    },
    {
        name: "Borys Mańkowski",
        height: "170.00cm",
        arm_range: "178.00cm",
        weight: "155lb",
        win_streak: {
            win: 7,
            loss: 5,
            draw: 0
        },
    },
    {
        name: "Mariusz Pudzianowski",
        height: "6.1ft",
        arm_range: "195.00cm",
        weight: "120,2kg",
        win_streak: {
            win: 17,
            loss: 7,
            draw: 0
        },
    },
    {
        name: "Marcin Różalski",
        height: "188.00cm",
        arm_range: "181.00cm",
        weight: "265lb",
        win_streak: {
            win: 7,
            loss: 4,
            draw: 0
        },
    },
    {
        name: "Akop Szostak",
        height: "5.6ft",
        arm_range: "186.00cm",
        weight: "93kg",
        win_streak: {
            win: 0,
            loss: 2,
            draw: 0
        },
    },
    {
        name: "Michał Materla",
        height: "183.00cm",
        arm_range: "192.00cm",
        weight: "185lb",
        win_streak: {
            win: 21,
            loss: 7,
            draw: 0
        },
    },
]

// Dodałem utrudnienie w postaci różnych jednostek by trochę zamieszać (1 ft == 30.48 cm), (1 lb == 0.45 kg).
// Mam nadzieję ze nie zostanę za to znienawidzony pozdrawiam. (edited)

// 1. Podaj imiona najcięższych zawodników.
function whoIsHeavy(elements) {
    const lbToKg = elements
        .filter((element) => element.weight.toLowerCase().includes('lb'))
        .map((element) => parseFloat(element.weight) * 0.45)
    const deleteKg = elements
        .filter((element) => element.weight.toLowerCase().includes('kg'))
        .map((element) => parseFloat(element.weight))
    const joinArrays = lbToKg.concat(deleteKg)
        .sort((a, b) => b - a)[0]
    return elements.filter((element) => element.weight.includes(joinArrays))
        .map((element) => element.name)
}

// 2. Podaj Imię zawodnika z najlepszym stosunkiem wygranych do przegranych starć.


// 3. Podaj Imię zawodnika a najwyższym BMI (stosunek wzrostu do wagi).
// function highestBmi(elements) {
    // const lbToKg = elements
    //     .filter((element) => element.weight.toLowerCase().includes('lb'))
    //     .map((element) => parseFloat(element.weight) * 0.45)
    // const ftToMeters = elements
    //     .filter((element) => element.height.toLowerCase().includes('ft'))
    //     .map((element) => parseFloat(element.height) * 0.3048)
//     const sorted = elements
//         .sort((a, b) => ((parseFloat(b.weight)) / (b.height)) - ((a.weight) / (a.height)))
// }

