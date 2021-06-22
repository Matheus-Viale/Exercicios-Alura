var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")
    console.log(this.value)
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value,"i");
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        } 
        if(this.value.length < 1){
            paciente.classList.remove("invisivel");
        }
        if(expressao.test(nome)){
            paciente.classList.remove("invisivel");
        }
    }
});