const contatoBtn = document.getElementsByClassName('hrefBtn');

const funcoesDosBotoes = () => {
  // Itera sobre todos os botões com a classe 'hrefBtn'
  for (let i = 0; i < contatoBtn.length; i++) {
    const element = contatoBtn[i];

    // Adiciona o evento de clique ao botão
    element.addEventListener('click', () => {
      const link = element.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  }
};

funcoesDosBotoes();
