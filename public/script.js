function ligar(cor) {
    fetch(`/${cor}/on`);
}

function desligar(cor) {
    fetch(`/${cor}/off`);
}
