class Mensagem {
    constructor (texto = 'Cu'){
        this._texto = texto;

    }
    get texto(){
         return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
} 