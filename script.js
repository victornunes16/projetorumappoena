const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');
const apiResponse = document.getElementById('apiResponse');

let count = 0;

clickButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = `Cliques: ${count}`;
  const targetUrl = 'http://50.19.158.248:3000/msg';
  
  // Chamada da API via proxy
  // fetch(targetUrl)
  fetch(targetUrl)
    referrerPolicy: "unsafe-url" 
    .then(response => response.json())
    .then(data => {
      apiResponse.textContent = `Resposta da API: ${data.message}`;
    })
    .catch(error => {
      apiResponse.textContent = `Erro ao chamar a API: ${error}`;
    });
});
