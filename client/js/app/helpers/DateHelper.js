//criaremos essa classe apenas para ajudar na criação e manipulação da data:
class DateHelper{

    // constructor(){
    //     //ao add esse comando no constructor, aparecerá essa msg no console, avisando o programador
    //     throw new Error('DateHelper não pode ser instanciada');
    // }

    static dataParaTexto(data){
        return data.getDate() + '/' 
            + (data.getMonth() +1)+ '/' 
            + data.getFullYear();
    }
    
    static textoParadata(texto){
        return new Date (...texto.split('-')
        .map((item, indice) => {
            return item - indice % 2;
        }))
    }
    
}