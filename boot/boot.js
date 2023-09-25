function trocaConteudo(conteudo) {
    let texto = document.getElementById(`texto_responsivo`);
    texto.textContent = conteudo;
    texto.style.display = `flex`;
    
    
}

function esconderConteudo() {
    let texto = document.getElementById(`texto_responsivo`);
    texto.style.display = `none`;
}