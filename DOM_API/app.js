const root = document.querySelector('.root')

const isNotEmpties = (elements) => elements.every((element) => element.value !== '');
const isNotEmpty = (element) => element.value !== '';

const isIntegers = (elements) => elements
    .every((element) => Number.isInteger(Number(element.value)));

const isInteger = (element) => Number.isInteger(Number(element.value));

const isInRange = (element) => parseInt(element.value) > 0 && parseInt(element.value) <= 49;

const isAllInRange = (elements) => elements.every(isInRange);

const convertInputs = (elements) => elements.map((element) => parseInt(element.value));

const isNotRedundant = (digits) => new Set(digits).size === digits.length;

const calculatePrize = (quantity) => {
    switch (quantity) {
        case 3:
            return 24;
        case 4:
            return 170;
        case 5:
            return 3500;
        case 6:
            return 3000000;
        default:
            return 0
    }
};
function createTag({tagName = 'div', tagClasses, tagText, tagId, tagAttrs, tagEvents} = {}) {
    const tag = document.createElement(tagName);

    if (Array.isArray(tagClasses)) {
        tagClasses.forEach((tagClass) => {
            tag.classList.add(tagClass)
        })
    }

    if (tagText !== undefined) {
        const text = document.createTextNode(tagText);
        tag.appendChild(text);
    }

    if (tagId !== undefined) {
        tag.id = tagId;
    }

    if (Array.isArray(tagAttrs)) {
        tagAttrs.forEach(({key, value}) => {
            tag.setAttribute(key, value);
        })
    }

    if (Array.isArray(tagEvents)) {
        tagEvents.forEach(({eventName, cb}) => {
            tag.addEventListener(eventName, cb)
        })
    }

    return tag
}

function createInput() {
    return createTag({
        tagName: 'input',
        tagAttrs: [
            {
                key: 'style',
                value: 'width: 50px; height: 50px; background: gold; border-radius: 50%; padding: 10px; text-align: center; border: 1px solid black'
            }
        ]
    })
}

function createInputs(amount=6) {
    const div = createTag({
        tagAttrs: [
            {
                key: 'style',
                value: 'margin-inline: auto; max-width: 600px; display: flex; justify-content: space-between; gap: 10px;'
            }
        ]
    })

    for (let i = 0; i < amount; i++) {
        div.appendChild(createInput())
    }

    return div
}

function drawDigits(amount=6) {
    const digits = [];

    while (digits.length < amount) {
        const digit = Math.floor(Math.random() * 48 + 1);

        if (!digits.includes(digit)) {
            digits.push(digit)
        }
    }

    return digits;
}

const checkHits = (userDigits, drawnDigits) => {
    const hits = [];

    for (const digit of userDigits) {
        if (drawnDigits.includes(digit)) {
            hits.push(digit);
        }
    }

    return hits;
}

const showResults = (hits, drawnDigits, resultRef) => {
    let message = `Wylosowane liczby to: ${drawnDigits.join(', ')}.`
    if (hits.length > 0) {
        message += ` Trafiłeś ${hits.length} razy, twoje liczby to ${hits.join(', ')}.`
        message += ` Hajs: ${calculatePrize(hits.length)}PLN`
    } else {
        message += 'Nic nie wygrałeś, spróbuj jeszcze raz, a na pewno wygrasz!'
    }

    resultRef.innerText = message;
}

function play(inputs, results, playBtn) {
    console.log(inputs)
    if (isNotEmpties(inputs)) {
        if (isIntegers(inputs)) {
            if (isAllInRange(inputs)) {
                const userDigits = convertInputs(inputs)
                const drawnDigits = drawDigits();
                const hits = checkHits(userDigits, drawnDigits);
                showResults(hits, drawnDigits, results);
            }
        }
    }
}



function createPlayBtn(inputs, results) {
    return createTag({
        tagName: 'button',
        tagText: 'Play',
        tagEvents: [
            {
                eventName: 'click',
                cb: (event) => {
                    play(inputs, results, event.target)
                }
            }
        ]
    })
}

function createResults() {
    return createTag();
}

function generateUI() {
    const section = createTag({
        tagName: 'section'
    })

    const inputs = createInputs();
    const results = createResults();

    section.appendChild(inputs);
    section.appendChild(createPlayBtn([...inputs.children], results));
    section.appendChild(results);

    return section;
}

root.appendChild(generateUI());
// root.appendChild(createTag({
//     tagName: 'input',
//     tagClasses: ['inputClass'],
//     tagId: 'inputId',
//     tagAttrs: [
//         {
//             key: 'type',
//             value: 'number'
//         },
//         {
//             key: 'placeholder',
//             value: 'Wpisz coś'
//         },
//         {
//             key: 'data-bdd',
//             value: 'quantity'
//         }
//     ],
//     tagEvents: [
//         {
//             eventName: 'focus',
//             cb: (event) => {
//                 event.target.style.border = '1px solid green'
//             }
//         },
//         {
//             eventName: 'blur',
//             cb: (event) => {
//                 event.target.style.border = '1px solid yellow'
//             }
//         }
//     ]
// }));

function becomeMillionaire(money, digits) {
    const games = money / 3;
    let prize = 0;
    const count6 = [];

    for (let i = 0; i < games; i++) {
        let userDigits;
        if (digits === undefined) {
            userDigits = drawDigits();
        } else {
            userDigits = digits;
        }

        const drawnDigits = drawDigits();
        const hits = checkHits(userDigits, drawnDigits);
        prize += calculatePrize(hits.length)

        if (hits.length === 6) {
            count6.push(hits);
        }
    }

    return `Wygrałeś ${prize}PLN, szóstki: ${count6.length}, trafione numery do szóstki: ${count6.join(', ')}`
}

