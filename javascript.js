//Show database json
(function readyJS(win, doc) {
{
    'use strict';

    let form1 = doc.querySelector('#form1');
    let name = doc.querySelector('#name');
    let response = doc.querySelector('.response');

    let ajax=new XMLHttpRequest();
    ajax.open('GET', 'http://localhost:3000/produtos');
        ajax.onreadystatechange=function(){
            if(ajax.status === 200 && ajax.readyState===4){
            let res=JSON.parse(ajax.responseText);
            let produtos = res.produtos;
            
            response.innerHTML = produtos[0].name;
        }
    };
    ajax.send();
}
})(window, document);

(function readyJS(win, doc) {
    'use strict';

    let form1 = doc.querySelector('#form1');
    let name = doc.querySelector('#name');
    let response = doc.querySelector('.response');

    //Send form to node js
    function sendForm(event) {
        event.preventDefault();
        let ajax = new XMLHttpRequest();
        let params=name.value;
        ajax.open('GET', 'http://localhost:3000/produtos');
        ajax.onreadystatechange=function(){
            if(ajax.status === 200 && ajax.readyState===4){
            let res = JSON.parse(ajax.responseText);
            let respostas = res.geladeira;

            response.innerHTML = respostasChatbot(params, respostas);
            }
        };
        ajax.send();
    }
    form1.addEventListener('submit', sendForm, false);
})(window, document);

function respostasChatbot(frase, respostas) {
    for (let index = 0; index < respostas.length; index++) {
        for (let i = 0; i < respostas[index].sinonimos.length; i++) {
            if (frase.includes(respostas[index].sinonimos[i])) {
                return respostas[index].resposta;
            }
        }
    }
    return "Desculpe, não sei como te ajudar";
}