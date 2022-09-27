import {Cliente} from "./Cliente.js"
import { Funcionario } from "./Funcionários/Funcionario.js"
import { Gerente } from "./Funcionários/Gerente.js"
import { Diretor } from "./Funcionários/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Marcos", 10000, 12345678900);
const gerente = new Gerente("Caio", 5000, 12345678901);
const cliente = new Cliente("Maria", 12345678902);

diretor.cadastrarSenha("123456")

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const estaLogado2 = SistemaAutenticacao.login(cliente, "123");

console.log(estaLogado);
console.log(estaLogado2);