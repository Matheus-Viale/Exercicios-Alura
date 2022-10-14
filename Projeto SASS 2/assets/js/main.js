function visibilidadePortfolio(){
    $('#btnTodos').click(function(){
        $('.portfolio-main').fadeIn();
    })
    $('#btnWebsites').click(function () {
        $('.portfolio-website').fadeIn();
        $('.portfolio-maquete').hide();
        $('.portfolio-design').hide();
    })
    $('#btnMaquetes').click(function () {
        $('.portfolio-maquete').fadeIn();
        $('.portfolio-website').hide();
        $('.portfolio-design').hide();
    })
    $('#btnDesigns').click(function () {
        $('.portfolio-design').fadeIn();
        $('.portfolio-website').hide();
        $('.portfolio-maquete').hide();
    })
}

function mostraBotaoWhats(){
    if($(window).innerWidth() < 992) {
        $('#btnBackToTop').hide();
        $('#btnNavWhatsApp').hide();
    } else{
        $('#btnWhatsApp').hide();
    }
}

$(document).ready(function () {
    visibilidadePortfolio();
    mostraBotaoWhats();
});