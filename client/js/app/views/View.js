class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    _update(model){
        this._elemento.innerHTML = this._template(model); /* o InnerHTML é um método que converte uma string, 
            que nesse caso é passada pelo elemento, para HTML puro (caso a string esteja correta p/ html) */
    }
}