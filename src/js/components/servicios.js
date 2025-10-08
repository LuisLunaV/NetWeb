import { transicionModal } from '../effects/transicionModal.js';
const serviciosCard=[
    {
        id: 'redes',
        component:`<img src="src/assets/img/publicidad/redes.jpeg" alt="servicio">`
    },
    {
        id: 'internet',
        component:`<img src="src/assets/img/publicidad/netweb.jpeg" alt="servicio">`
    },    {
        id: 'web',
        component:`<img src="src/assets/img/publicidad/devweb.png" alt="servicio">`
    },{
        id: 'sistemas',
        component:`<img src="src/assets/img/publicidad/sistemas.png" alt="servicio">`
    },
    {
        id: 'consultoria',
        component:`<img src="src/assets/img/publicidad/asesorias.jpeg" alt="servicio">`
    }
]

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


