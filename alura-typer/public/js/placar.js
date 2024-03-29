var qntdPalavras = $("#contador-palavras");
var botaoPlacar = $('#botao-placar');
var botaoSync = $('#botao-sync');

botaoSync.click(sincronizaPlacar);
botaoPlacar.click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $('.placar').find('tbody');
    var usuario = $('#usuarios').val();
    var numPalavras = qntdPalavras.text();
    var linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.prepend(linha);
    $('.placar').slideDown(500);
    scrollPlacar();
};

function scrollPlacar() {
    var posicaoPlacar = $('.placar').offset().top;
    $('body').animate({
        scrollTop: posicaoPlacar+"px"
    }, 1000);
    
};

function novaLinha(usuario, palavras){
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(palavras);
    var colunaRemover = $('<td>');
    var link = $('<a>').addClass('botao-remover').attr('href', '#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete_forever');
    
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
};


function removeLinha(event){
    event.preventDefault();
    var linha = $(this).parent().parent()
    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();
    }, 1000);
};

function mostraPlacar() {
    $('.placar').stop().slideToggle(600);

}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $('tbody>tr');
    linhas.each(function(){
        var usuario = $(this).find('td:nth-child(1)').text();
        var palavras = $(this).find('td:nth-child(2)').text();

        var score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);
    });
    var dados = {
        placar: placar
    }
    $.post('http://localhost:3000/placar', dados, function(){
        $('.tooltip').tooltipster("open");
        setTimeout(function(){
            $('.tooltip').tooltipster("close");
        }, 3000)        
    })
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

function atualizaPlacar(){

    $.get('http://localhost:3000/placar', function(data){
        $(data).each(function(){
            var corpoTabela = $('.placar').find('tbody');
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find('.botao-remover').click(removeLinha);
            corpoTabela.prepend(linha);
            
        });
    })
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