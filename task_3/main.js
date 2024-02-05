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



let number = [ [1, 2, 3], [4, 5, 6, 7], ["ИС-2-2", "ИС-2-1"] ];
const arrayLen = number.length;