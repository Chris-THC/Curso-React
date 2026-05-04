import React, { useState } from "react";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue

    if (!name || !age) {
      setResult("Por favor completa todos los campos");
      return;
    }
    setResult(`Hola ${name}, tienes ${age} años`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulario básico</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Ahora el botón es tipo submit */}
        <button type="submit">Enviar</button>
      </form>

      <p>{result}</p>
    </div>
  );
};

export default App;
