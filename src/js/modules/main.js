import { efectoScrollEnNav } from '../helpers/efectoScrollEnNav.js';
 export class Main{
    constructor(){

       this.header    = document.querySelector('.headers');
       this.logoHeader= document.querySelector('.logo');
       this.anchors   = document.querySelectorAll('.barra-nav nav a');
        // Detectamos la posicion del scroll para ocultar o mostrar la barra nav
        this.detectorScroll();
        this.imprimiTarjetasDeProyectos();
    }

    imprimiTarjetasDeProyectos(){
      console.log('Imprimiendo tarjetas de proyectos');
    }

    detectorScroll(){
    window.addEventListener('scroll',()=>efectoScrollEnNav(
      this.header,
      this.logoHeader,
      this.anchors
    ));
 }
}