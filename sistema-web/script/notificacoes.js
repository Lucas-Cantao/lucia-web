let tipo = document.querySelector("#tipo")
let dataInicio = document.getElementById('data_inicio')
let envia = document.querySelector("#envia")
let result = document.querySelector("#result")
let hora = document.querySelector("#hr")
let min = document.querySelector("#min")


let detalhes = document.querySelector("#details")
let salas = document.querySelector("#salas")

let saida = document.querySelector('#saida')
let textarea = document.querySelector("#textarea")

console.log(dataInicio.value)

const recados = 
[
    {
        conteudo: `<div class="aviso"><p>📌🚨🚨🚨Atenção🚨🚨🚨 📌</p><p>Informamos que no dia 2023-08-29 a turma do 3°A irão ser dispensados às 16:20</p></div>`
    },
    {
        conteudo: `<div class="aviso"><p>🔊🔊🔊 ATENÇÃO 📣📣📣</p><p>Informamos que no dia 2023-08-30 a turma do 3°A irão ser dispensados às 16:20</p></div>`
    }
]


const changed = () => {
    if(tipo.options[tipo.selectedIndex].value != "pers"){
        textarea.style.display = 'none';
    }else{
        textarea.style.display = 'block';
    }
}


const olhar = () => {
    let area = textarea.value
    let formated = area.replace(/\n/g, "<br>")
    if(tipo.options[tipo.selectedIndex].value == 'pers'){
        result.innerHTML = `<div class="aviso">${formated}</div>`
        recados[recados.length] = {
            conteudo: result.innerHTML
        }
    }else{

        switch (detalhes.options[detalhes.selectedIndex].value){
            case 'saida':
                result.innerHTML = `<div class="criarResult"><p>${tipo.options[tipo.selectedIndex].innerHTML}</p><p>Informamos que no dia ${dataInicio.value} a turma do ${salas.options[salas.selectedIndex].value} irão ser dispensados às ${hora.value}:${min.value}</p></div>`
                recados[recados.length] = {
                    conteudo: result.innerHTML
                }
                break;
        }
    }
    

}

const adicionar = () => {
    document.querySelector(".avisos_armazenados").innerHTML += recados[recados.length - 1].conteudo
}

const sla = document.querySelector(".avisos")

const criar = ()=>{
    sla.style.scale = 1
}

document.querySelector("#close_criar").addEventListener("click", () => {
    sla.style.scale = 0
})

recados.forEach(aviso => {
    document.querySelector(".avisos_armazenados").innerHTML += aviso.conteudo
})






envia.addEventListener("click", olhar)
