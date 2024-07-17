// manter o estilo abaixo do menu ativo quando aclicar na página
const links = document.querySelectorAll(".header-menu a");
function fixar(pegar) {
  const href = pegar.href;
  const url = document.location.href;
  if (url.includes(href) &&matchMedia('(min-width:900px)').matches) {
    
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

//Troca de imagens na pagina bicicltas
const imagens= document.querySelectorAll('.bicicleta-imagens img');
const galeria= document.querySelector('.bicicleta-imagens');
function alterar(event){
  const img =event.currentTarget;
  const media = matchMedia('(min-width:900px)').matches;
  if(media);
  galeria.prepend(img);
}
function clicarTroca(imagem){
  imagem.addEventListener('click',alterar);
}
imagens.forEach(clicarTroca);

//Animação
if(window.SimpleAnime){
  new SimpleAnime();
}