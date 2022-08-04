const spanPlayer = document.querySelector('.player');


// var nome = window.prompt("Qual seu nome?");
// var idade = window.prompt("Qual sua idade?");
// var local = window.prompt("Mora aonde?");

// window.write(`Olá,` + nome + `!`);


window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
}