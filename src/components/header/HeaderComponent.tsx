import React from "react";

export const HeaderComponent: React.FC = () => {
  return (
    <div className="header-container">
      <div className="logo">MiProyecto</div>
      <div className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  );
};
