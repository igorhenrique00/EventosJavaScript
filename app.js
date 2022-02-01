
var corpo = window.document.getElementById('corpo')
corpo.addEventListener('click', clicou)
corpo.addEventListener('mouseenter', entrou)
corpo.addEventListener('mouseout', saiu)

function clicou() {
    corpo.innerText = 'Clicou'
    corpo.style.background = 'red'
}
function entrou() {
    corpo.innerText = 'Entrou'
    corpo.style.background = 'blue'
}
function saiu() {
    corpo.innerText = 'Saiu'
    corpo.style.background = 'green'
}