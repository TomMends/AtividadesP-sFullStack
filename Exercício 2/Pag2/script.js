// let define uma variavel de forma global
let input = document.querySelector('input[name=tarefa]');
// query selector busca um elemento na tela 
let btn = document.querySelector('#botao');
let list = document.querySelector('#lista');
let card = document.querySelector('.card');
// pega todos as informações do localstorege
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){
    lista.innerHTML = '';

    for (tarefa of tarefas) {
       let itemLista = document.createElement('li');
       itemLista.setAttribute('class', 'list-group-item list-group-item-action');
       itemLista.onclick = function(){
            deletarTarefa(this);
       }

       // correção de lacunas após excluir um item da lista
       let itemTexto = document.createTextNode(tarefa);
       itemLista.appendChild(itemTexto);
       lista.appendChild(itemLista);
        
    }
}


renderizarTarefas();





// criando função do botao btn
btn.onclick = function(){

    let novaTarefa = input.value;

    if (novaTarefa !== "")
    {
        // inserindo o valor na variavel
        tarefas.push(novaTarefa);
        renderizarTarefas();
        // zerando o input
        input.value = '';
        // removando os valores de espaços em branco
        removerSpans();
        // salva os dados no storage
        salvarDadosNoStorage();
    } else {
        removerSpans();
        // cria elemento do tipo span
        let span = document.createElement('span');
       // define que o atributo do span é um alerta
        span.setAttribute('class', 'alert alert-warning');
        // cria uma variavel para reber a mensagem do alerta
        let msg = documento.creatTextNode('Voce precisa digitar a tarefa que deseja incluir');
        // atribui a mensagem para o span 
        span.appendChild(msg);
        // atribui o span ao card
        card.appendChild(span);
    }
}

//remove caracteres em branco
function removerSpans () {
    let spans = document.querySelectorAll('span');
    for(let i = 0 ; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}


function deletarTarefa(tar){
    // busca um index dentro do conteudo e remove
    tarefas.splice(tarefas.indexOf(tar.textContent),1);
    renderizarTarefas();
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}