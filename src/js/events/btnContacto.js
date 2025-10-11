import { formularioHTML } from '../components/formulario.js';
import { sendMessage } from './sendMessages.js';
export const btnContactoEvent=(elementoBoton, contenedorModal)=>{
    elementoBoton.addEventListener("click",( )=>{
       if( formularioHTML(contenedorModal)){
           const formularioMsgModal = document.querySelector("#form_contacto_modal");  
           sendMessage(formularioMsgModal)
       }
    });
}