import { formularioHTML } from '../components/formulario.js';
export const btnContactoEvent=(elementoBoton, contenedorModal)=>{
    elementoBoton.addEventListener("click",( )=>{
        formularioHTML(contenedorModal);
    });
}