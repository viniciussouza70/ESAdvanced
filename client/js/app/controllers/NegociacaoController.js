class NegociacaoController{
    constructor(){
        //PEGANDO OS DADOS DO FORM:
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor  = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(); //criando o obj que manupulará a classe ListaNegociacoes
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(); //fazendo a tabela aparecer no DOM 
    }

    adiciona(event){
        event.preventDefault();
        // let helper = new DateHelper();
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._limpaFormulario();
            console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParadata(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus(); //dá foco à data 
    }   
}