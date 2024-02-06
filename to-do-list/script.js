let addToButton = document.getElementById('addToDo');
let toDoConteiner = document.getElementById('toDoConteiner');
let InputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo')

addToButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoConteiner.appendChild(paragraph);
    paragraph.innerHTML = InputText.value;
    InputText.value= "";


    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= 'line-through';
    });

    paragraph.addEventListener('dblclick',function(){
        toDoConteiner.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    });
})