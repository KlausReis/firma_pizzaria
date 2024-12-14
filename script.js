// Destaque de seções ao clicar no menu
function highlightSection(id) {
    // Remove destaque de todas as seções
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('highlight');
    });
  
    // Adiciona destaque à seção selecionada
    document.getElementById(id).classList.add('highlight');
  }
  