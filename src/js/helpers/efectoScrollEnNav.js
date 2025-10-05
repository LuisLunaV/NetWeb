export const efectoScrollEnNav = (header, logoHeader, anchors) => {
  if (window.scrollY > 600) {
    anchors.forEach((anchor) => {
      anchor.classList.add("anchorWhite");
    });

    logoHeader.classList.add("ocultar");
    header.classList.add("reducir");
  } else {
    anchors.forEach((anchor) => {
      anchor.classList.remove("anchorWhite");
    });
    logoHeader.classList.remove("ocultar");
    header.classList.remove("reducir");
  }
};
