var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista | Exercício ALURA";


	var pacientes = document.querySelectorAll(".paciente");

	for (var i = 0; i < pacientes.length; i++){

		var paciente = pacientes[i];
		var tdPeso = paciente.querySelector(".info-peso");
		var tdAltura = paciente.querySelector(".info-altura");

		var tdImc = paciente.querySelector(".info-imc");

		var peso = tdPeso.textContent;
		var altura = tdAltura.textContent;

		var pesoEhValido = validaPeso(peso);
		var alturaEhValida = validaAltura(altura);

		var imc;		

		if (!pesoEhValido){

			tdPeso.textContent = "Peso Inválido!"
			tdImc.textContent = "Dados Inválidos!";
			paciente.classList.add("pacienteInvalido");


		}

		if(!alturaEhValida){

			tdAltura.textContent = "Altura Inválida!"
			tdImc.textContent = "Dados Inválidos!";
			paciente.classList.add("pacienteInvalido");

		} 

		if (pesoEhValido && alturaEhValida){

			imc = calculaImc(peso, altura);
			tdImc.textContent = imc

		}			
	}

function validaPeso(peso){

	if (peso >= 0 && peso < 500){
		return true;
	} else{
		return false;
	}

}

function validaAltura(altura){

	if(altura >= 0 && altura <= 3.0){
		return true;
	} else{
		return false;
	}
}

function calculaImc(peso, altura){

	var imc = 0;

	imc = peso / (altura*altura);

	return imc.toFixed(2);
}


