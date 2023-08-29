let ver = 1

const fechar = document.querySelector("#close")
const abrir = document.querySelector("#open")
const sidebar = document.querySelector('.menu')

function fecharSidebar()
{
    sidebar.style.marginLeft = '-1800px'
}

function abrirSidebar()
{
    sidebar.style.marginLeft = 0
}


fechar.addEventListener('click', fecharSidebar)
abrir.addEventListener('click', abrirSidebar)

