var tempoInicial = $('#contador-tempo').text();
var tempoRestante = $('#contador-tempo').text();

$(document).ready(function(){
    var botaoReiniciar = $('#botao-reiniciar');
    iniciaContadores();
    iniciaCronometro();
    iniciaMarcadores();
    botaoReiniciar.click(reiniciaJogo);
    atualizaPlacar();
    $('.tooltip').tooltipster({
        trigger: "custom"
    });
    $("#usuarios").selectize({
    create: true,
    sortField: "text",
    });    
});


function iniciaMarcadores(){

    var campoDigitacao = $("#typer");

    campoDigitacao.on("input", function(){
        var frase = $(".frase").text();
        var qntdCaracteres = $("#contador-caracteres");
        var qntdPalavras = $("#contador-palavras");
        var digitado = campoDigitacao.val();
        var comparavel = frase.substr(0, digitado.length);
        var digitadoCaracteres = digitado.length;
        var digitadoPalavras = digitado.split(/\S+/).length - 1;
    
        qntdCaracteres.text(digitadoCaracteres);
        qntdPalavras.text(digitadoPalavras);

        if(digitado == comparavel){
            campoDigitacao.addClass("estilo-typer-correct");
            campoDigitacao.removeClass("estilo-typer-wrong");
        };
        if(digitado != comparavel){
            campoDigitacao.addClass("estilo-typer-wrong");
            campoDigitacao.removeClass("estilo-typer-correct");
        };
    
    });
};


function iniciaContadores() {

    var frase = $(".frase").text();
    var palavrasFrase = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(palavrasFrase);
    
};

function mudaTempo(tempo){
    
    $('#contador-tempo').text(tempo);
    tempoInicial = tempo;
    tempoRestante = tempo;
    
}

function iniciaCronometro(){
    var campoDigitacao = $("#typer");
    var botaoReiniciar = $('#botao-reiniciar');

    campoDigitacao.one("focus", function(){
        var cronometro = setInterval(function(){
            tempoRestante--;
            $('#contador-tempo').text(tempoRestante);
            botaoReiniciar.attr("disabled", true);
            
            if(tempoRestante < 1){
                clearInterval(cronometro);
                finalizaJogo();                
            };
        }, 1000);
    
    
    });
};

function finalizaJogo(){
    var campoDigitacao = $("#typer");
    var botaoReiniciar = $('#botao-reiniciar');
    var frase = $(".frase").text();
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("estilo-typer-desabilitado");
    botaoReiniciar.attr("disabled", false);
    campoDigitacao.removeClass("estilo-typer-correct");
    campoDigitacao.removeClass("estilo-typer-wrong");
    inserePlacar();
    if(campoDigitacao.val() == frase){
        campoDigitacao.addClass("estilo-typer-concluido");
    };
};

function reiniciaJogo(){

    var campoDigitacao = $("#typer");

    if(tempoRestante == 0){
        var qntdCaracteres = $("#contador-caracteres");
        var qntdPalavras = $("#contador-palavras");
        campoDigitacao.attr("disabled", false);
        campoDigitacao.val("");
        qntdCaracteres.text("0");
        qntdPalavras.text("0");
        $('#contador-tempo').text(tempoInicial);
        tempoRestante = tempoInicial;
        campoDigitacao.removeClass("estilo-typer-desabilitado");
        campoDigitacao.removeClass("estilo-typer-correct");
        campoDigitacao.removeClass("estilo-typer-wrong");
        campoDigitacao.removeClass("estilo-typer-concluido");
        iniciaCronometro();  
    };
      
};


