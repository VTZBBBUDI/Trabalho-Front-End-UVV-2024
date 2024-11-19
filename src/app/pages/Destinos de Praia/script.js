const contatoBtn = document.getElementsByClassName('hrefBtn');

const funcoesDosBotoes = () => {
  for (let i = 0; i < contatoBtn.length; i++) {
    const element = contatoBtn[i];
    element.addEventListener('click', () => {
      const link = element.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  }
};

funcoesDosBotoes();
