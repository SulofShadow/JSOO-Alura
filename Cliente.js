export class Cliente{
    nome;
    _cpf;

    // Usamos apenas o 'get' para não podermos atrivbui-lá fora da classe
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this._cpf = cpf;
        this.nome = nome;
    }
}