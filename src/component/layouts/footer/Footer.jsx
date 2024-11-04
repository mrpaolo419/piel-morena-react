import React from "react";
import "./Fotter.css";

const Footer = () => {
  return (
    <div className="footerCont">
      <p>
        &copy; {new Date().getFullYear()} PIEL MORENA. Todos los derechos
        reservados.
      </p>
      <div className="footerLinks">
        <span>Política de Privacidad | </span>
        <span>Términos de Servicio | </span>
        <span>Contacto</span>
      </div>
    </div>
  );
};

export default Footer;
