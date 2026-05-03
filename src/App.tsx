import React from "react";
import "./App.css";
//Forma de importar una imagen en React (usando import)
// import imgUser from "./assets/user.jpg";

// Componente de la tarjeta (sin props, datos hardcodeados)
const ProfileCard: React.FC = () => {
  return (
    <div className="card">
      <img
        //src={imgUser}
        src="https://randomuser.me/api/portraits/men/88.jpg"
        alt="Perfil"
        className="card-img"
      />
      <h2>Thomas Miller</h2>
      <p><strong>Edad:</strong> 21 años</p>
      <p><strong>Semestre:</strong> 8to Semestre</p>
      <p><strong>Descripción:</strong> Estudiante apasionado por React.</p>
      <button className="card-btn">Guardar</button>
    </div>
  );
};

// Componente App principal
const App: React.FC = () => {
  return (
    <div className="app-container">
      <ProfileCard />
    </div>
  );
};

export default App;