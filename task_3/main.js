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
        console.log(`Студент ${college[0]["name"]} получает повышенную степендию, ${college[0]["cash"]} руб.`);
    } 
    else if ( college[0]["cash"] <= 4400 && college[0]["cash"] > 0 ) {
        console.log(`Студент ${college[0]["name"]} получает обычную степендию, ${college[0]["cash"]} руб.`);
    } 
    else {
        console.log(`Студент ${college[0]["name"]} не получает степендию.`);
    }
}
else if ( college[0]["isStudent"] === false ) {
    console.log(`Вы выбрали преподователя ${college[0]["name"]}`);
    if ( college[0]["isKurator"] ) {
        console.log(`Преподователь ${college[0]["name"]} куратор группы ${college[0][kuratorGroup]}`);
    }
}
