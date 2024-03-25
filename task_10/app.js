const checkInput = () => {
    let input = document.querySelector('#taskInput').value;
    let button = document.querySelector('#taskBtn');
    
    // если input не пустой
    if (input !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addTask = () => {
    let task = document.querySelector('#taskInput').value;
    let li = document.createElement('li'); 

    li.textContent = task;
    
    document.querySelector('#taskList').appendChild(li); // добавление дочерних элементов, не заменяя предыдущие в отличии от inner html
    document.querySelector('#taskInput').value = "";
    document.querySelector('#taskBtn').disabled = true;
}