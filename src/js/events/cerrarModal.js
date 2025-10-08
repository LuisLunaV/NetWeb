export const cerrarModal = ( containeModal ) => {
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('#closed');
cerrar.addEventListener('click',()=>{
   modal.classList.add('ocultar-modal');
   containeModal.classList.remove('traslateY');
   // setTimeout(() => {
      // containeModal.innerHTML = '';
   // }, 500); 
});
}