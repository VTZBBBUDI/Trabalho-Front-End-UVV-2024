const imageContainers = document.querySelectorAll('.image-container');
const contatoBtn = document.getElementById('cttBtn');

const darVidaAsImagens = () => {
  imageContainers.forEach((container, index) => {
    container.addEventListener('mouseenter', () => {
      const overlay = container.querySelector('.overlay');
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      container.style.transform = "scaleY(1.1)";
      container.style.transition = "transform 0.3s ease-in-out";
    });

    container.addEventListener('mouseleave', () => {
      const overlay = container.querySelector('.overlay');
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      container.style.transform = "scaleY(1)";
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
  });
};

darVidaAsImagens();