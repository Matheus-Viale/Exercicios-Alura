var botaoAnexo = document.querySelector("#anexar-pacientes");

botaoAnexo.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        
        var erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);            
            })
        } 
        if(xhr.status != 200){
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })

    xhr.send();
})