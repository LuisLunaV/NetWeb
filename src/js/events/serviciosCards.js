import { servicios } from '../components/servicios.js';
export const serviciosCards =( divServicios, containerModal )=>{
    divServicios.addEventListener('click', ( { target } )=>{
        const card = target.closest('.card-service').id;

        switch(card){
            case 'redes':
                servicios( card , containerModal);
            break;
            case 'internet':
                servicios( card, containerModal);
            break;
            case 'web':
                servicios( card , containerModal);
            break;
            case 'sistemas':
                servicios( card, containerModal);
            break;
            case 'consultoria':
                servicios( card , containerModal);
            break;
            default:
                console.log('No se selecciono ningun servicio');
            break;  
        }
    });
}