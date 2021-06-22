var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#formAdiciona");
	
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErros(erros);
		var mensagensErros = document.querySelector("#mensagensErros");
		console.log(mensagensErros);
		return;
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var mensagensErros = document.querySelector("#mensagensErros");
	mensagensErros.innerHTML = "";

});

function obtemPacienteDoFormulario(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function validaPaciente(paciente){

	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode estar em branco!");
	}

	if(!validaPeso(paciente.peso)){
		erros.push("Peso inválido!");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura inválida!");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode estar em branco!");
	}

	if(paciente.peso.length == 0){
		erros.push("O peso não pode estar em branco!");
	}

	if(paciente.altura.length == 0){
		erros.push("A altura não pode estar em branco!");
	}

	return erros;

}

function exibeMensagensDeErros(erros){
	var ul = document.querySelector("#mensagensErros");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function montaTd(dado, classe){
	
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}