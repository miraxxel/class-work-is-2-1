// объекты пишутся только в фигурных скобках
/*let person = {
    name: "Tom",
    age:  18,
    hobbies: ["Кушать", "Спать", "Просмотр кино"],
    contacts: {
        phone: [88005553255, 889055553255],
        email: "tom@example.com",
        social: "www.github.com"
    }
}

console.log(person["name"], person["age"]) // обращение к атрибуту, сначала к объекту, затем в [""] имя атрибута
// или
console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`); 
console.log(person["hobbies"][2]) // переходим к глобальному объекту, а после выбираем конкретный элемент
console.log(person["contacts"]["phone"][1]);*/


// массив сам индексирует элементы
// объект (более глобальный, чем массив, индекс задаем сами, пишем в {}) содержит атрибуты которые мы сами придумываем
// массив мы исп. когда не знаем как индексировать наши значения (например, какие пары сегодня)
// то к чему мы можем приписать общее определение, мы используем атрибуты 
//(например, как выглядит студент, что у него на голове, что на руках, вверх, них и т.д)


/*let college = [
    {name: "Tom", age:  18, group: "ИС-2-1"},
    {name: "Bob", age:  18, group: "ИС-2-2"},
    {name: "Stan", age:  23, group: "ИС-2-1"},
    {name: "Harry", age:  17, group: "ИС-2-2"},
];

college[0]["age"] = 24;
console.log(college);*/

//console.log(college[2]["name"]); // для атрибута, при выводемы указываем его имя
// если атрибуты объектов одинаковые их можно хранить в массиве

let college = [
    {name: "Tom", age:  18, group: "ИС-2-1"},
    {name: "Bob", age:  18, group: "ИС-2-2"},
    {name: "Stan", age:  23, group: "ИС-2-1"},
    {name: "Harry", age:  17, group: "ИС-2-2"},
];

let count = 2;

let studentAge = college[count]["age"];
let studentName = college[count]["name"];

if (studentAge >= 18 ) {
    console.log(`Студент ${studentName} совершеннолетрий, ему ${studentAge}`);
} else if (studentAge < 18) {
    console.log(`Студент ${studentName} не совершеннолетрий, ему ${studentAge}`);
}
