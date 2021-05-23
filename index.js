import{Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("João", 15992037748);
const cliente2 = new Cliente("Maria", 15773370783);

const contaCorrenteJoao = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(120, cliente2);

// Como ele não pertence à alguma instancia, nós chamamos a própria ContaCorrete(classe);
console.log(ContaCorrente.numeroDeContas);
