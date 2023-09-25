function content(conteudo) {
    let text = document.querySelector('span');
    text.value = conteudo;
}

function remove() {
    let text = document.querySelector('span');
    text.value = `?`;
}
