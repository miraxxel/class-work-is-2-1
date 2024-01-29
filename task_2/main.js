/*const age = 16;
if (age >= 18) {
    console.log("Вы совершеннолетний!");
} else {
    console.log("Вы не щсовершеннолетний!");
} */

let statusPar = true;
console.log("Сегодня важные пар?");

if (statusPar === true) {
    console.log("Сколько сегодня пар?");
    let countPar = 2;
    if (countPar < 4) {
        console.log("Сиди дома");
    } else {
        console.log("Беги на учебу");
    }
} else {
    console.log("Сиди дома");
}