class ListaNegociacoes{
    constructor() {
        this._negociacoes = []; //declarando uma lista que começa com 0
    }
        adiciona(negociacao) {
            this._negociacoes.push(negociacao) /*o método push adiciona um elemento no fim do vetor, que será passado pelo parâmetro negociacao*/
        }
    get negociacoes(){
//programação defensiva: assim, caso alguém queira alterar via código o nosso site, alterará uma cópia da lista
        return [].concat(this._negociacoes);
    }
}