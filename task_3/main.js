/*const students =  ["Андрей", "Иван", "Стас"];
const student = students[1];
console.log(student);*/

// js такой язык в котором лучше всё делать отдельно, 
// а в console.log(); выводить только уже готовый параметр
// (например с примером выше, лучше не делать сразу console.log(students[1]);, а исп. отдел. переменную)

// при изменении элемента в массиве, менять можно на любой элемент не зависимо от типа остальных элементов
/*let students =  ["Андрей", "Иван", "Стас"]; 
students[2] = 5
console.log(students);*/

// если заранее нет нужного индекса в массиве, его можно создать
// (не добавляя элементы в массив пока их в нём не станет 50)
// (в консоли выдаст только заполненые индексы, (укажет что пусто ещё 47))
/*let students =  ["Андрей", "Иван", "Стас"]; 
students[50] = "Индекс 50";
console.log(students);*/

// ctrl+/ - закомментировать

// многомерные массивы - массив содержащий в себе вложенные массивы
/*let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
console.log(college);*/

// в многомерном массиве, помимо элементов, сами массивы имеют свой индекс
// как вывести элемент из многомерного массива
// сначала выбираем индекс нужного массива
// а затем индекс нужного элемента
// если массивов больше, то это становится похоже на структуру проводника
/*let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
college[1][1] = 112;
let kab = college[1][1];
console.log(kab);*/

// атрибут length (определение длины) создается автоматически 
// let num = [1, 2, 3, 4];

// const countLength = 5;

// if (num.length === countLength) {
//     console.log("Ok");
// } else if (num.length < countLength) {
//     let result = countLength - num.length;
//     console.log(`Длина вашего массива: ${num.length}. Длину массива нужно увеличить до ${countLenght}. Прибавьте к массиву `);
// }

// косые ковычки - передают динамический параметр

/*let number = [ 1, 2, 3, 4, 5, 6, 7 ];

const coutLenght = 5;

if ( number.length === coutLenght ) {
    console.log("ok");
} 
else if ( number.length < coutLenght ) {
    let result = coutLenght - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${coutLenght}. Прибавьте к массиву значение ${result}.`);
} 
else if ( number.length > coutLenght ) {
    result = number.length - coutLenght;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно уменьшить до ${coutLenght}. Удалите из массива количество элементов: ${result}.`);
}*/

/*let number = [ [1, 2, 3], [4, 5, 6, 7], ["ИС-2-2", "ИС-2-1"] ];
const arrayLen = number.length;*/




// 1-ая пара ↑ 
// 2-ая пара ↓




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

/*let college = [
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
}*/


let college = [
    {
        name: "Harry", 
        age:  18, 
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 0,
        isStudent: true   // указываем, что атрибуты сверху принадлежат студенту
    },
    {
        name: "Ron", 
        age:  19, 
        group: "ИС-2-2",
        studID: 321233,
        typeLearning: "Заочная",
        task: ["ИЗО", "МДК-03-02", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true   
    },
    {
        name: "Tom", 
        age:  32, 
        isKurator: true,
        kuratorGroup: "ИС-2-2",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false 
    },
    {
        name: "Bob", 
        age:  32, 
        isKurator: true,
        kuratorGroup: "ИС-2-1",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false 
    }
];

if (college[0]["isStudent"] === true) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["age"] >= 18 ) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний, ему ${college[0]["age"]}`);
    } 
    else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний, ему ${college[0]["age"]}`);
    } 

    if ( college[0]["cash"] >= 4500 ) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию, ${college[0]["cash"]} руб.`);
    } 
    else if ( college[0]["cash"] <= 4400 && college[0]["cash"] > 0 ) {
        console.log(`Студент ${college[0]["name"]} получает обычную стипендию, ${college[0]["cash"]} руб.`);
    } 
    else {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
    }
}
else if ( college[0]["isStudent"] === false ) {
    console.log(`Вы выбрали преподавателя ${college[0]["name"]}`);
    if ( college[0]["isKurator"] ) {
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0][kuratorGroup]}`);
    }
}
