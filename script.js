// Função para bloquear a leitura do menu de contexto
function offContextMenu() {
     return false;
}

document.oncontextmenu = offContextMenu

// Função bloqueando o clique com o botão direito do mouse
function offRightButton(e) {
     return false
}

document.onmousedown = offRightButton

// Bloqueio da combinação "Ctrl + Shift + I" (que abre o Inspencionar Elemento)
window.onkeydown = function () {
     const key = event.keyCode || event.charCode || event.which;
     if (key == 17) { } return false;
}
