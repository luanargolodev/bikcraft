// Ativar links do menu
const links = document.querySelectorAll(".header-menu a"); // Selecionar todos os 'a' que estão dentro da class .header-menu

function ativarLink(link) {
  const url = window.location.href; // Pegar a url atual
  const href = link.href; // Pegar as urls do loop

  if (url.includes(href)) {
    // Verificar se a url atual tem nas urls obtidas pelo 'a'
    link.classList.add("ativo"); // Se encontrar, adicionar a class ativo no 'a'
  }
}

links.forEach(ativarLink); // Fazer um loop com todos os links obtidos

// Ativar itens do orçamento
const parametros = new URLSearchParams(window.location.search); // Obter os parametros do site

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro); // Obter todas as informações do input
  if (elemento) {
    // Se tiver o elemento
    elemento.checked = true; // Realizar o checked no input
  }
}

parametros.forEach(ativarProduto); // Criar um loop com todos os parametros

// Mostrar e esconder o conteúdo das perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button"); // Selecionar todos os botões que estão dentro da class perguntas

function ativarPergunta(event) {
  const pergunta = event.currentTarget; // Pegar a pergunta clicada
  const controls = pergunta.getAttribute("aria-controls"); // Pegar o atributo ID que está em aria-controls
  const resposta = document.getElementById(controls); // Pegar toda a linha da pergunta clicada pelo ID

  resposta.classList.toggle("ativa"); // Colocar ou retirar a class ativa do botão
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta); // Ativar o evento de click em algum dos botões existentes
}

perguntas.forEach(eventosPerguntas); //Criar um loop com todos os botões
