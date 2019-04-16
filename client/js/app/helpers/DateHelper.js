//criaremos essa classe apenas para ajudar na criação e manipulação da data:
class DateHelper{

    // constructor(){
    //     //ao add esse comando no constructor, aparecerá essa msg no console, avisando o programador
    //     throw new Error('DateHelper não pode ser instanciada');
    // }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; //isso resume tudo isso:
        // data.getDate() + '/' 
        //     + (data.getMonth() +1)+ '/' 
        //     + data.getFullYear();
    }
    
    static textoParadata(texto){
        //esse if testa se o parâmetro texto, que virará data, segue o padrão aaaa/mm/dd:
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) // \d{4} = dígito de 4 números
        throw new Error ('A data deve estar no formato aaaa/mm/dd');

        return new Date (...texto.split('-')
        .map((item, indice) => {
            return item - indice % 2;
        }))
    }
}