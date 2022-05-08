// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//

let body = document.getElementsByTagName('body');
let wrapper = document.createElement('div');

document.body.append(wrapper);
for (let bodyElement of body) {
    bodyElement.addEventListener("click", (e) => {

        if (e.which === 1) {
            let divTag = document.createElement('div');
            if (e.target.tagName !== '' || undefined) {
                divTag.innerHTML = `Tag name: ${e.target.tagName}`;
                console.log(`Tag name view in Console: ${e.target.tagName}`);
            } else {
                divTag.innerHTML = `Tag: NO`;
                console.log(`Tag name view in Console: NO`);
            };

            let divClass = document.createElement('div');
            if (e.target.className !== '' || undefined) {
                divClass.innerHTML = `Class Name: ${e.target.className}`;
                console.log(`Class Name view in Console: ${e.target.className}`);
            } else {
                divClass.innerHTML = `Class: NO`;
                console.log(`Class Name view in Console: NO`);
            };

            let divId = document.createElement('div');
            if (e.target.id !== '' || undefined) {
                divId.innerHTML = `Id: ${e.target.id}`;
                console.log(`Id view in Console: ${e.target.id}`);
            } else {
                divId.innerHTML = `Id: NO`;
                console.log(`Id view in Console: NO`);
            };

            let divHeight = document.createElement('div');
            if (e.view.innerHeight !== '' || undefined) {
                divHeight.innerHTML = `Height: ${e.target.offsetHeight}`;
                console.log(`Height view in Console: ${e.target.offsetHeight}`);
            } else {
                divHeight.innerHTML = `Height: NO`;
                console.log(`Height view in Console: NO`);
            };

            let divWidth = document.createElement('div');
            if (e.view.innerWidth !== '' || undefined) {
                divWidth.innerHTML = `Width: ${e.target.offsetWidth}`;
                console.log(`Width view in Console: ${e.target.offsetWidth}`);
            } else {
                divWidth.innerHTML = `Height: NO`;
                console.log(`Width view in Console: NO`);
            };

            let divLength = document.createElement('div');
            if (e.srcElement.outerText.split('').length > 0) {
                divLength.innerHTML = `Length of tag name ${e.target.tagName}: ${e.srcElement.outerText.split('').length}`;
            } else {
                divLength.innerHTML = `Length: 0`;
            };


            let divLengthInput = document.createElement('div');

            let inputValue = document.getElementById('input').value;

            let divInVal = document.createElement('div');
            if (inputValue.split('').length > 0) {
                divInVal.innerHTML = `Input: ${inputValue}`;
                divLengthInput.innerHTML = `Input Length of Symbols: ${inputValue.split(' ').join('').length}`;

            } else {
                divInVal.innerHTML = `Input: ${inputValue}`;
                divLengthInput.innerHTML = `Input Length of Symbols: 0`;
            };

            input.oninput = function () {
                result.innerHTML = input.value;
            };

            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            divClass.append(divHeight, divWidth, divLength);
            divId.append(divClass);
            divTag.append(divId, divInVal, divLengthInput);
            divTag.style = `
                border: 1px solid black;
                width: fit-content;
                margin-bottom: 10px;
                background-color: rgb(${red}, ${green}, ${blue});
            `;

            wrapper.append(divTag);
            console.log('Click on this element', e.target);
        };
    });
};


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (оставляет со статусом false)

let statusFalse = usersWithAddress.filter(function (statusF) {
    return statusF.status === false;
});
console.log('Users with status False:', statusFalse);

for (let i = 0; i < statusFalse.length; i++) {
    let ulStatFalse = document.createElement('ul');
    ulStatFalse.style = `
                        border-style: ridge;
                        border-radius: 10px;
                        width: max-content;
                        padding: 10px;
    `;
    document.body.append(ulStatFalse);
    let divStatFalseElement = statusFalse[i];
    for (let divStatFalseElementKey in divStatFalseElement) {
        if (typeof divStatFalseElement[divStatFalseElementKey] !== "object") {
            let divLi = document.createElement('li');
            divLi.style = `
                              list-style: none;
                `;

            let firstUpper = divStatFalseElementKey.charAt(0).toUpperCase() + divStatFalseElementKey.slice(1);

            divLi.append(`${firstUpper} = ${divStatFalseElement[divStatFalseElementKey]}`);
            ulStatFalse.append(divLi);
        } else {
            let address = divStatFalseElement.address;
            for (let addressKey in address) {
                let divLi = document.createElement('li');
                divLi.style = `
                              list-style: none;
                `;

                let addressKeyUpper = addressKey.charAt(0).toUpperCase() + addressKey.slice(1);

                divLi.append(`${addressKeyUpper} = ${address[addressKey]}`);
                ulStatFalse.append(divLi);
            };
        };
    };
};


// 2й - оставляет старше 29 лет включительно

let olderTwentyNine = usersWithAddress.filter(function (ageOlder) {
    return ageOlder.age >= 29;
});
console.log('Cтарше 29 лет включительно', olderTwentyNine);
document.write(`<hr>`);
document.write(`<p><b>Cтарше 29 лет включительно</b></p>`);
document.write(`<hr>`);
for (let i = 0; i < olderTwentyNine.length; i++) {
    let olderTwentyNineElement = olderTwentyNine[i];
    for (let olderTwentyNineElementKey in olderTwentyNineElement) {
        if (typeof olderTwentyNineElement[olderTwentyNineElementKey] !== "object") {
            let firstUpperOlderTwentyNineElementKey = olderTwentyNineElementKey.charAt(0).toUpperCase() + olderTwentyNineElementKey.slice(1);
            document.write(`<li>${firstUpperOlderTwentyNineElementKey} = ${olderTwentyNineElement[olderTwentyNineElementKey]};</li>`);
        } else {
            let address = olderTwentyNineElement.address;
            for (let addressKey in address) {
                let firstUpperAddressKey = addressKey.charAt(0).toUpperCase() + addressKey.slice(1);
                document.write(`<li>${firstUpperAddressKey} = ${address[addressKey]};</li>`);
            };
        };
    };
    document.write(`<hr>`);
};

// 3й - оставляет тех у кого город киев

let cityKyiv = usersWithAddress.filter(function (city) {
    return city.address.city === "Kyiv";
});
console.log('Tе у кого город Kиев', cityKyiv);
document.write(`<b>Tе у кого город Kиев</b><hr>`);
for (let i = 0; i < cityKyiv.length; i++) {
    let cityKyivElement = cityKyiv[i];
    for (let cityKyivElementKey in cityKyivElement) {
        if (typeof cityKyivElement[cityKyivElementKey] !== "object") {
            document.write(`<li>${cityKyivElementKey} = ${cityKyivElement[cityKyivElementKey]}</li>`);
        } else {
            let address = cityKyivElement.address;
            for (let addressKey in address) {
                let firstUpperAddressKey = addressKey.charAt(0).toUpperCase() + addressKey.slice(1);
                document.write(`<li>${firstUpperAddressKey} = ${address[addressKey]};</li>`);
            };
        };
    };
    document.write(`<hr><hr>`);
};

// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//

