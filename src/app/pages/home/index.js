const imageContainers = document.querySelectorAll('.image-container');
    
imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    const overlay = container.querySelector('.overlay');
    overlay.classList.remove('opacity-0');
    overlay.classList.add('opacity-100');
    
    // Expandir apenas no eixo Y para evitar overflow no eixo X
    container.style.transform = "scaleY(1.1)";
    container.style.transition = "transform 0.3s ease-in-out";
  });

  container.addEventListener('mouseleave', () => {
    const overlay = container.querySelector('.overlay');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    
    // Voltar para o tamanho original
    container.style.transform = "scaleY(1)";
  });
});
