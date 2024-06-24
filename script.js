const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');
const apiResponse = document.getElementById('apiResponse');

const options = {
  method: 'GET',
  url: 'http://3.238.219.121:3000/msg',
  Headers: {
    'Content-Type': 'application/json',
  },
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

let count = 0;

clickButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = `Cliques: ${count}`;
  
  
  // teste
  // URL do proxy CORS Anywhere
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'http://3.238.219.121:3000/msg';
  
  // Chamada da API via proxy
  // fetch(targetUrl)
  fetch(targetUrl, options)
    .then(response => response.json())
    .then(data => {
      apiResponse.textContent = `Resposta da API: ${data.message}`;
    })
    .catch(error => {
      apiResponse.textContent = `Erro ao chamar a API: ${error}`;
    });
});
