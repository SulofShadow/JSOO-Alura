import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    
    //Temos que incializá-lo porque quando chama o sacar e o depositar, você não tem saldo entao temos que incializá-lo.
    _saldo = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        // Usamos não mais o _cliente, pois já verificamos ele
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor <=  0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    
}