// import Swal from "sweetalert2";

export const messageSendAlert = () => {
  Swal.fire({
    title: "Mensaje enviado",
    icon: "success",
    draggable: true,
    width: "550px",
    padding: "5rem",
    confirmButtonText: "Aceptar",
    customClass: {
      title: "swal-title-custom",
      icon: "swal-icon-custom",
      confirmButton: "swal-btn-custom",
    },
  }).then((result) => {
    const modal = document.querySelector(".modal");
    const containerModal = document.querySelector(".containe-modal");
    if (result.isConfirmed) {
      modal.classList.add("ocultar-modal");
      containerModal.classList.remove("traslateY");
    }
  });
};
