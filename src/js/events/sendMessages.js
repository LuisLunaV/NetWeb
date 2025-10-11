import { sendMessagePost } from '../services/apiPost.js';
import { sanitizePayload } from '../helpers/sanitizacionDeObjetos.js';
import {  messageSendAlert } from '../utils/sweetsAlerts.js';
export const sendMessage=( formContact)=>{
    formContact.addEventListener('submit', async( e )=>{
        e.preventDefault();
        const formData = new FormData(formContact);
        const payload = Object.fromEntries(formData);
        const data = sanitizePayload(payload);
        if( !data) return alert('No debe haber datos vacios en el formulario.');
        const resp = await sendMessagePost(data);
        if(resp){
            messageSendAlert();
        }
        
        const cajas = formContact.querySelectorAll('input, textarea');
        cajas.forEach(element => {
            console.log(element)
            element.value = '';
        });
    })
}