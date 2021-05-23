export class Cliente{
    nome;
    _cpf;

    // Usamos apenas o 'get' para não podermos atribuir-lo fora da classe
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this._cpf = cpf;
        this.nome = nome;
    }
}
