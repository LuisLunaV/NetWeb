import { transicionModal } from  '../effects/transicionModal.js';
export const formularioHTML =( divModal )=>{
    const html =`<form class="form">
    <p class="message">Comunicate con nosotros
      <i class="bi bi-cup-hot"></i>
    </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Nombre(s)</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Apellido(s)</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required="">
        <span>Correo electronico</span>
    </label> 
 
   <label for="mensajeText" class="form-label poppins-medium">Como podemos ayudarte?</label>
      <textarea
        class="form-text-area"
        id="mensajeText"
        placeholder="Agrega tu mensaje mas numero de contacto (opcional)"
        rows="5"
        required
      ></textarea>
    <button class="submit">Enviar</button>
</form>`;
divModal.innerHTML=html;
transicionModal(divModal);
}