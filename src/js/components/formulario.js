import { transicionModal } from  '../effects/transicionModal.js';
export const formularioHTML =( divModal )=>{
    const html =`<form class="form-contacto-modal" action="">
          <div class="div-contacto-name-lastname">
            <div class="div-contacto-name">
              <label for="div_nombres" class="form-label">Nombre completo</label>
              <input
                type="text"
                class="form-control"
                id="div_nombres"
                placeholder="Agrega tu nombre"
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
              placeholder="nombre@ejemplo.com"
            />
          </div>
          
          </div>

          <div class="div-contacto-asunto">
            <label for="contacto_email" class="form-label"
              >Asunto</label
            >
            <input
              type="text"
              class="form-control"
              id="contacto_email"
              placeholder="Titulo del mensaje"
            />
          </div>

          <div class="div-contacto-textarea">
            <textarea
              id="contacto-textarea"
              rows="5"
              placeholder="Agrega tu mensaje mas numero de contacto (opcional)"
            ></textarea>
          </div>
          <input type="submit" value="Enviar" class="btn-submit-contacto-modal" />
        </form>`;
divModal.innerHTML=html;
transicionModal(divModal);
}