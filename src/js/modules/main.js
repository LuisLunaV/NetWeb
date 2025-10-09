import { efectoScrollEnNav } from "../effects/efectoScrollEnNav.js";
import { serviciosCards, cerrarModal, btnContactoEvent } from "../events/index.js";
export class Main {
  constructor() {
    this.header = document.querySelector(".headers");
    this.logoHeader = document.querySelector(".logo");
    this.anchors = document.querySelectorAll(".barra-nav nav a");
    this.serviciosCards = document.querySelector(".servicios-cards");
    this.btnContacto = document.querySelector("#btn_contacto");
    this.containerModal = document.querySelector(".containe-modal");

    // Detectamos la posicion del scroll para ocultar o mostrar la barra nav
    this.detectorScroll();
    this.imprimiTarjetasDeProyectos();
    this.eventos();
  }

  imprimiTarjetasDeProyectos() {
    console.log("Imprimiendo tarjetas de proyectos");
  }

  eventos() {
    serviciosCards(this.serviciosCards, this.containerModal);
    btnContactoEvent(this.btnContacto, this.containerModal );
    cerrarModal(this.containerModal);
  }
  detectorScroll() {
    window.addEventListener("scroll", () =>
      efectoScrollEnNav(this.header, this.logoHeader, this.anchors)
    );
  }
}
