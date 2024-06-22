const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');
const apiResponse = document.getElementById('apiResponse'); // Adicionado para mostrar a resposta da API

let count = 0;

clickButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = `Cliques: ${count}`;
  

  // para testar utilizar o seguinte link:  https://cors-anywhere.herokuapp.com/corsdemo  -  O erro que você está enfrentando é devido ao uso do CORS Anywhere, que tem uma limitação de uso e requer que você primeiro desbloqueie o proxy acessando uma página de demonstração
  // URL do proxy CORS Anywhere
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'http://3.238.219.121:3000/msg';
  
  // Chamada da API via proxy
  fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
      apiResponse.textContent = `Resposta da API: ${data.message}`;
    })
    .catch(error => {
      apiResponse.textContent = `Erro ao chamar a API: ${error}`;
    });
    console.log(apiResponse.textContent);
});
