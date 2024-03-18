const calculate = () => {
    // const inputGrade5 = document.querySelector('.title') // найдется элемент с классом title
    // любой поиск начинается с document (который представляет собой весь html файл)

    // ищем все input по названию ID
    const inputGrade5 = parseInt(document.querySelector('#grade-5').value);
    const inputGrade4 = parseInt(document.querySelector('#grade-4').value);
    const inputGrade3 = parseInt(document.querySelector('#grade-3').value);
    const inputGrade2 = parseInt(document.querySelector('#grade-2').value);
    
    if( isNaN(inputGrade5) || isNaN(inputGrade4) || isNaN(inputGrade3) || isNaN(inputGrade2) ){
        alert("Заполните все поля!"); // alert - всплывающее окно с текстом
        return;
    }

    // общая сумма всех оценок
    let gradeSum = inputGrade5 + inputGrade4 + inputGrade3 + inputGrade2;

    // объект
    const persentages = {
        '5': (( inputGrade5 / gradeSum ) * 100).toFixed(2), // используя .toFixed(2) мы сокращаем выводящееся число до двух цифр после запятой 
        '4': (( inputGrade4 / gradeSum ) * 100).toFixed(2),
        '3': (( inputGrade3 / gradeSum ) * 100).toFixed(2),
        '2': (( inputGrade2 / gradeSum ) * 100).toFixed(2)
    };

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
        <p>Оценка 5: ${persentages[5]}%</p> 
        <p>Оценка 4: ${persentages[4]}%</p> 
        <p>Оценка 3: ${persentages[3]}%</p> 
        <p>Оценка 2: ${persentages[2]}%</p>   
    `;
}