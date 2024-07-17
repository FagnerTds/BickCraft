// manter o estilo abaixo do menu ativo
const links = document.querySelectorAll(".header-menu a");
function fixar(pegar) {
  const href = pegar.href;
  const url = document.location.href;
  if (url.includes(href)) {
    pegar.classList.add("ativo");
  }
}
links.forEach(fixar);
