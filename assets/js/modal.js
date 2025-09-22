document.addEventListener('DOMContentLoaded', () => {
  const modals = {
    'abrir-cad': {
      backdrop: document.getElementById('fundo-cad'),
      closeBtn: document.getElementById('fechar-cad')
    },
    'abrir-log': {
      backdrop: document.getElementById('fundo-log'),
      closeBtn: document.getElementById('fechar-log')
    }
  };

  // controla melhor a visibilidade no modal, por isso no css eu deixei o display none
  const toggleModal = (backdrop, show) => {
    if (backdrop) {
      backdrop.style.display = show ? 'flex' : 'none';
      document.body.style.overflow = show ? 'hidden' : '';
    }
  };

  // Evento nos mdoal
  for (const openBtnId in modals) {
    const openBtn = document.getElementById(openBtnId);
    const { backdrop, closeBtn } = modals[openBtnId];

    if (openBtn && backdrop && closeBtn) {
      
      // Abrir modal
      openBtn.addEventListener('click', () => toggleModal(backdrop, true));
      
      // Fechar no botão 'X'
      closeBtn.addEventListener('click', () => toggleModal(backdrop, false));
      
      
      backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
          toggleModal(backdrop, false);
        }
      });
    }
  }
});
