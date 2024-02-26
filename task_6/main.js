// функции - шаблонный код - в неё должны удобно передаваться любые значения
// название функции лучше писать с большой буквы, чтобы они визуально отличались от переменных
// пишется исп. ключевое слово function
// функция вызвается по её названию + (), вызываться может бесконечное кол-во раз
/*function Hello() {
    console.log("Hello");
}
Hello();*/

// 2 способ с помощью присвоения к отдельной переменной
/*const hi = function Hi() {
    console.log("Hi")
}
hi();*/

// 3 способ "стрелочная функция" - современный и более предпочтительный (исп. на всех фреймворках)
/*const main = () => {
    console.log("Hey")
}
main();*/

// круглые скобки позволяют передавать какие-либо параметры (ключи??)
// параметр нужен для передачи каких-то значений, которые встанут потом на свои места



// (a * b) + (c * d) = ...
/*let sum = (a, b, c, d) => {
    let res1 = a * b;
    let res2 = c * d;
    let result = res1 + res2;
    console.log(result);
}
sum(2, 3, 2, 3);
sum(22, 33, 44, 55);
sum(222, 333, 444, 555);*/
// можно указывать значения переменных по умолчанию, сразу в параметрах


// массив в функции
/*let person = (array) => {
    console.log(array[0]);
}

const toma = ["Toma", 24, "toma@example.com"];
const kaneki = ["Kaneki", 20, "kaneki@example.com"];
person(toma);
person(kaneki);*/


// объект в функции
/*let person = (object) => {
    console.log(object["name"]);
    console.log(object["name"]);
}

let toma = { name: "Toma", age: 24, email: "tom@example.com" };
person(toma);*/


/*let temp = (e) => {
    if (e === undefined) // если параметр пустой, то 
        console.log("Укажите тем-ру!");
    else {
        if (e >= 25) 
            console.log(`Сегодня ${e} градусов. Можно надеть футболку.`);
    }
}
let key = prompt("Введите тем-ру: "); // prompt - ввод с клавиатуры
temp(key);*/


// использование функций в условиях
let res1 = () => {
    console.log("Вам 17");
}
let res2 = () => {
    console.log("Вам не 17");
}

let age = 17;

if (age <= 17) {
    res1();
}
else {
    res2 ();
}

