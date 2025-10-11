import { transicionModal } from  '../effects/transicionModal.js';
export const formularioHTML =( divModal )=>{
    const html =`<form class="form-contacto-modal" id="form_contacto_modal">
          <div class="div-contacto-name-lastname">
            <div class="div-contacto-name">
              <label for="div_nombres" class="form-label">Nombre completo</label>
              <input
                type="text"
                class="form-control"
                id="div_nombres"
                                name="Mensaje_Name"
                placeholder="Agrega tu nombre"
                required
              />
            </div>

             <div class="div-contacto-email">
            <label for="contacto_email" class="form-label"
              >Correo electronico</label
            >
            <input
              type="email"
              class="form-control"
              id="contacto_email"
                              name="Mensaje_Email"
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          
          </div>

          <div class="div-contacto-asunto">
            <label for="contacto_asunto" class="form-label"
              >Asunto</label
            >
            <input
              type="text"
              class="form-control"
              id="contacto_asunto"
                              name="Mensaje_Asunto"
              placeholder="Titulo del mensaje"
              required
            />
          </div>

          <div class="div-contacto-textarea">
            <textarea
              id="contacto-textarea"
                              name="Mensaje_Body"
              rows="5"
              placeholder="Agrega tu mensaje mas numero de contacto (opcional)"
              required
            ></textarea>
          </div>
          <input type="submit" value="Enviar" class="btn-submit-contacto-modal" />
        </form>`;
const resp = divModal.innerHTML=html;
transicionModal(divModal);
if(resp) return true;
}