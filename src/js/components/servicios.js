import { transicionModal } from '../effects/transicionModal.js';
const serviciosCard=[
    {
        id: 'redes',
        component:`<img src="./src/assets/img/publicidad/cam_web.jpeg" alt="servicio">`
    },
    {
        id: 'internet',
        component:`<img src="./src/assets/img/publicidad/netweb.jpeg" alt="servicio">`
    }
]

export const servicios =( servicio, divElement )=>{
    
      // agregamos el componante al div del modal
      const data = serviciosCard.filter( card => card.id === servicio );
      divElement.innerHTML = data[0].component;
      
      // Mostramos el modal
      if(divElement.children.length != 0){
        setTimeout(() => {
            transicionModal( divElement);
        }, 1000);
       }
    }


