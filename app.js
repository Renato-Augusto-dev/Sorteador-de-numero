function sortear(){

    //Declarando variavel
    let quantidadeDeNumero = parseInt(document.querySelector('#quantidade').value);
    let numeroMinino = parseInt(document.querySelector('#de').value);
    let numeroMaximo = parseInt(document.querySelector('#ate').value);
    let texto = document.querySelector('#texto__paragrafo');
    const numeroSorteado = [];
    
    //fazendo um lopp para cada numero aleatorio
    for(let i = 0; i < quantidadeDeNumero; i++){
        
        numeroAleatorio = obterNumeroAleatorio(numeroMinino, numeroMaximo);
        while(numeroSorteado.includes(numeroAleatorio)){
            numeroAleatorio = obterNumeroAleatorio(numeroMinino, numeroMaximo);
        }

        numeroSorteado.push(numeroAleatorio);
        
    }
    texto.innerHTML = `Numeros sorteados: ${numeroSorteado}`;
    alterarStatusDoBotao();
}
function obterNumeroAleatorio(min,max){
    //guardando o numero aleatorio
    return Math.floor(Math.random() * (max - min) + min);
}
function reiniciar(){
    //fazendo um botão de limpar os campos
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#texto__paragrafo').innerHTML = '';
    alterarStatusDoBotao();

}
function alterarStatusDoBotao(){
    let botao = document.querySelector('#btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}