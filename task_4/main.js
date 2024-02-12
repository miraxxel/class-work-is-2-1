// const students = ["Tom", "Bob", "Harry", "Ron"];

// for (let i = 0; i < students.length; i++) {
//     let result = students[i];
//     console.log(result);
// }



// let people = [["Tom", 18], ["Bob", 17], ["Stan", 36]];

// for (let i = 0; i < people.length; i++) 
// {
//     for ( let j = 0; j < people[i].length; j++) {
//         let result = people[i][j];
//         console.log(result);
//     }
//     console.log("---------");
// }



// for in и for of
// исп. не счётчик, а как бы отдельную переменную предназнач. для результата(??)
// массив разбивается на несколько частей и попадает в динамическую переменную item
// const students = ["Tom", "Bob", "Harry", "Ron"];

// for (let item in students) {
//     // console.log(item);
//     console.log(students[item]); 
// }

// in - индексы массива
// of - элементы массива



// объекты не имеют длины, и для них лучше исп. for in, в обычном for не получится использовать динамический .length
// for of с объектами выдает ошибку, потому что объект при вызове нач. выполнять сортировку по алфавиту
const person = { name: "Tom", age: 23};

for (let item in person) {
    console.log(item, person[item]);
}