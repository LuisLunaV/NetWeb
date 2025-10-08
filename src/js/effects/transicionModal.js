export const transicionModal = ( elemento ) => {
const modal = document.querySelector('.modal');
modal.classList.remove('ocultar-modal');
elemento.classList.add('traslateY');


}