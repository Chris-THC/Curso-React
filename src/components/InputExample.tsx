import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          console.log(event.target.value);
        }}
      />

      <h2>Hola, {name}</h2>
    </div>
  );
};

export default InputExample;
