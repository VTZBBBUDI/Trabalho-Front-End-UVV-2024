const contatoBtn = document.getElementsByClassName('hrefBtn');
const form = document.querySelector('form');

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

const funcaoDoForm = () => {
  const criarModal = (message) => {
    const overlay = document.createElement('div');
    overlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50');
    overlay.id = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.classList.add('bg-[#0b366b]', 'p-6', 'rounded-lg', 'shadow-lg', 'max-w-sm', 'w-full', 'text-center');
    
    const messageElement = document.createElement('p');
    messageElement.classList.add('text-lg', 'font-bold', 'mb-4', 'text-white');
    messageElement.textContent = message;
    modal.appendChild(messageElement);
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.classList.add('bg-[#274e13]', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'hover:bg-[#1f460b]', 'transition-colors');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
    modal.appendChild(closeButton);
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  };
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    criarModal('Formulário enviado com sucesso!');
    form.reset();
  });
}

funcoesDosBotoes();
funcaoDoForm();