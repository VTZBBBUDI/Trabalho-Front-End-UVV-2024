const imageContainers = document.querySelectorAll('.image-container');
const contatoBtn = document.getElementById('cttBtn');

const darVidaAsImagens = () => {
  imageContainers.forEach((container) => {
    const textoImagem = container.querySelector('.texto-imagem p');
    const overlay = container.querySelector('.overlay');
    
    container.addEventListener('mouseenter', () => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      container.style.transform = "scaleY(1.1)";
      container.style.transition = "transform 0.3s ease-in-out";
      textoImagem.style.color = 'transparent';
    });

    container.addEventListener('mouseleave', () => {
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      container.style.transform = "scaleY(1)";
      textoImagem.style.color = '';
    });

    container.addEventListener('click', () => {
      const link = container.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });

    contatoBtn.addEventListener('click', () => {
      const link = contatoBtn.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });

    container.addEventListener('mouseenter', () => {
      textoImagem.style.opacity = '0';
      overlay.classList.add('visible');
    });
  
    container.addEventListener('mouseleave', () => {
      textoImagem.style.opacity = '1';
      overlay.classList.remove('visible');
    });  
  });
};

darVidaAsImagens();