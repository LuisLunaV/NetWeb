import { serviciosCard } from '../data/serviciosData.js';
import { transicionModal } from '../effects/transicionModal.js';


export const servicios =( servicio, divElement )=>{
  
      // agregamos el componante al div del modal
      const data = serviciosCard.filter( card => card.id === servicio );

      const elemento = data[0].component;
      divElement.innerHTML = elemento; 

      // Mostramos el modal
      if(divElement.children.length > 0){
        setTimeout(() => {
            transicionModal( divElement);
        }, 500);
       }
    }


