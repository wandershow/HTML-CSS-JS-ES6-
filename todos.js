var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) ||  []; // "JSON.parse" transforma de volta em array

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos){ //for especifico para arrays
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a'); //cria a tag 'a'
        linkElement.setAttribute('href', '#'); //atribui a tag 'a' um href de nome '#'

        var pos = todos.indexOf(todo); //indexof pega a posição da variavel
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');//atribui a variavel linkElement a função 'onclick' e quando for apertado chama a função 'deleteTodo'

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText); //add o linkText "Excluir" dentro do linkElement

        todoElement.appendChild(todoText);//add o todoText dentro do todoElement
        todoElement.appendChild(linkElement); //add o linkElement dentro do todoElement

        listElement.appendChild(todoElement); //add cada um dos todoElement dentro da lista de elementos
    }
}

renderTodos();

    function addTodo() {
        var todoText = inputElement.value; //o valor que tem dentro do input 

        todos.push(todoText); //add um elemento ao final do array
        inputElement.value = ''; //apaga o valor dentro do input
        renderTodos(); //chama o metedo render pra atualizar
        saveToStorage(); 
    }

    buttonElement.onclick = addTodo; //quando clicar adicionar ele add o elemento e mostra em tela

    function deleteTodo(pos){
        todos.splice(pos, 1); //remove uma quantidade de itens do array na posição especificada, no exemplo remove 1 da 'pos' passada
        renderTodos(); //chama o metodo render pra atualizar
        saveToStorage(); 
    }

    function saveToStorage(){


        localStorage.setItem('list_todos', JSON.stringify(todos)); //o "JSON.STRINGFY" transforma o nosso vetor "todos" em uma string
    }




