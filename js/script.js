// manter o estilo abaixo do menu ativo quando aclicar na página
const links = document.querySelectorAll(".header-menu a");
function fixar(pegar) {
  const href = pegar.href;
  const url = document.location.href;
  if (url.includes(href)) {
    pegar.classList.add("ativo");
  }
}
links.forEach(fixar);

//Ativar itens do Orçamento SEGURO
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controle = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controle);
  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded',ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
