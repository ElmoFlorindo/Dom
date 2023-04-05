/*
function clicou(){
    alert("Realmente clicou!")
}

function clicou2(){
    alert("Realmente clicou no botao 2")
    
}

let butao2 = document.querySelector(".butao2")

butao2.addEventListener("click" , clicou2)

*/
/*

function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    let newUl = document.createElement("ul")
    ul.after(newUl)

    for(let i = 0 ; i < 5 ; i++){
        let newLi = document.createElement("li")
        newLi.innerHTML = "Item adicionado " + i 
        newUl.append(newLi)
    }

   // ul.innerHTML += "<li>Mais um texto no li. </li>"
   //ul.children[0].innerHTML = "<li> Aterando o li no indice 0</li>"


}

function botao2(){
    const teste2 = document.querySelector("#teste")
    const strong = teste2.children[1]
    strong.innerHTML = "Mudando a string dentro do strong!"
    //console.log(document.querySelector())
}

function mudaH1() {
    const h1 = document.querySelectorAll("h1")
    const h10 = h1[0]
    const h11 = h1[1]
    //h10.innerHTML = "Mudando o texto principal."
    //h11.innerHTML = "Mundando o texto principal 2"
    
    //h10.append("(adicionar)")
    //h11.append("(adicionar)")

    h10.prepend("(adicionar)")
}

*/
/*

// Manipular html
function clicou() {
    const input = document.querySelector("input")
    const butao1 = document.querySelector(".botao")

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        butao1.innerText = "Mostrar senha"
        butao1.style.backgroundColor = "green"
    } else {
        input.setAttribute('type', 'text')
        butao1.innerText = "Esconder senha"
        butao1.style.backgroundColor = "red"
    }
}

// Manipular css
function botao2() {
    const li = document.querySelector("li")
    li.style.backgroundColor = "black"
    li.style.color = "purple"
    li.style.fontSize = "30px"
}

*/

// eventos de teclado

function soltou(event){
    console.log(`Techa apertada : ` +  event.code)
    console.log(`Shift pertado? ` + event.shiftKey)
    console.log(`Ctrl apertado?` + event.ctrlKey)
    console.log(`Alt apertado?` + event.altKey)
}
//function apertou(){
//    console.log("Apertou")
//}

const input = document.querySelector("input")
input.addEventListener('keyup', soltou)

//input.addEventListener('keydown' , apertou)




