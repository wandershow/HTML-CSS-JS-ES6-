/* assim faz sem biblioteca axios
    var minhaPromise = function(){ //sao requisições assincronas
    return new Promise(function(resolve, reject){ //resolve e a variavel dentro da promise que sera usado quando o retorno esperado for de sucesso
                                                  // reject quando o resultado nao foi de sucesso  
        var xhr = new XMLHttpRequest();//essa xmlhttprequest e o que da acesso ao ajax pra recuperar alguma informação do servidor
        xhr.open('GET', 'https://api.github.com/users/diego3g'); //chama a funçao "open" e passa primeiro o metodo que quer. no caso "GET" e pra buscar no endereço
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4)  { // 4 significa que a resposta da requisição voltou. retorna um JSON
                if(xhr.status === 200) { //200 e o codigo de sucesso da requisição
                     resolve(JSON.parse(xhr.responseText)); //aqui converte o JSON que retornou em um vetor
            } else {
                reject('Erro na requisição');
            }
          }
        }
    });
}

minhaPromise()
    .then(function(response){// quando estiver certo chama o response  (similar metodo try catch)
        console.log(response);
    })
    .catch(function(error) { //quando estiver errado chama o error
        console.warn(error);
    });*/

    //com biblioteca axios

    axios.get('https://api.github.com/users/diego3g')
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.warn(error)
        });
    

