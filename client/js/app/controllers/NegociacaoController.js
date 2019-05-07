class NegociacaoController {
    constructor() {
        //PEGANDO OS DADOS DO FORM:
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(); //criando o obj que manupulará a classe ListaNegociacoes
        this._negociacoesView = new View($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes); //fazendo a tabela aparecer no DOM 
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagemView.update(this._mensagem); 
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParadata(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus(); //dá foco à data 
    }
}