// Digitar um texto no input e adicionar la lista de itens clicando 
//no botar adicionar ou apertando enter!

const input = document.querySelector("#input1")
const ul = document.querySelector("#lista")
const botao1 = document.querySelector("#botao1")


input.addEventListener('keyup', apertouEnter)


function apertouEnter(evento) {
    if (evento.key === "Enter") {
        ul.innerHTML += '<li>' + input.value + '</li>'
        input.value = ''
    }
}

function apertouBotao1() {
    ul.innerHTML += '<li>' + input.value + '</li>'
    input.value = ''
}

