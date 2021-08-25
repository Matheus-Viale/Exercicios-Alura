var botaoFrase = $('#botao-frase');
var botaoBuscaFrase = $('#botao-busca-frase');

botaoBuscaFrase.click(buscaFrase)
botaoFrase.click(mudaFrase);

function mudaFrase() {
    reiniciaJogo();
    $('#spinner').fadeIn();
    $.get('http://localhost:3000/frases', fraseAleatoria)
    .fail(function(){
        $('#erro').fadeIn();
        setTimeout(function(){
            $('#erro').fadeOut();
        }, 3000);
    })
    .always(function(){
        $('#spinner').fadeOut();
    });
};


function fraseAleatoria(data){
    var frase = $('.frase');
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    var tempo = data[numeroAleatorio].tempo;
    iniciaContadores();
    mudaTempo(tempo);
}

function buscaFrase(){
    reiniciaJogo();
    $('#spinner').fadeIn();
    var fraseId = $('#busca-frase').val();
    var dados = {id:fraseId};
    $.get('http://localhost:3000/frases', dados, trocaFrase)
    .fail(function(){
        $('#erro').fadeIn();
        setTimeout(function(){
            $('#erro').fadeOut();
        }, 3000);
    })
    .always(function(){
        $('#spinner').fadeOut();
    });

}

function trocaFrase(data){
    var frase = $('.frase');
    frase.text(data.texto);
    var tempo = data.tempo;
    iniciaContadores();
    mudaTempo(tempo);
}