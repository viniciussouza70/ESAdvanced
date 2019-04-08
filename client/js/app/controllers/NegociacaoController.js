class NegociacaoController{
    constructor(){
        //PEGANDO OS DADOS DO FORM:
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor  = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        //essa função serve para descobrir o tipo do campo, no caso, o inputData
        console.log(typeof(this._inputData.value))

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value);

        //convertendo a data, outrora string, em um obj date separado po - 
        let data = new Date(this._inputData.value.replace(/-/g, ','));
        console.log(data);
    }
}