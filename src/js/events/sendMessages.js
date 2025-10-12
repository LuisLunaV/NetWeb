import { sendMessagePost } from "../services/apiPost.js";
import { sanitizePayload } from "../helpers/sanitizacionDeObjetos.js";
import { messageSendAlert } from "../utils/sweetsAlerts.js";
export const sendMessage = (formContact) => {
  formContact.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formContact);
    const payload = Object.fromEntries(formData);
    // Sanitizamos el objeto de caracteres maliciosos
    const data = sanitizePayload(payload);
    if (!data) return alert("No debe haber datos vacios en el formulario.");

    //Enviamos el mensaje al backend
    const resp = await sendMessagePost(data);
    if (resp) {
      messageSendAlert();
    }

    // Limpiamos los input de los formularios
    const cajas = formContact.querySelectorAll("input, textarea");
    cajas.forEach((element) => {
      element.value = "";
    });
  });
};
