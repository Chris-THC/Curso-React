import React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export const Table: React.FC = () => {

    const data = [
        { name: "Juan Pérez", position: "Desarrollador", status: "Activo" },
        { name: "María Gómez", position: "Diseñadora", status: "Inactivo" },
        { name: "Carlos Rodríguez", position: "Gerente", status: "Activo" },
        { name: "Ana Martínez", position: "Analista", status: "Inactivo" },
        { name: "Luis Fernández", position: "Soporte", status: "Activo" },
        { name: "Giner Alor", position: "Profesor", status: "Activo" },
    ];

  return (
    <table className="mi-tabla">
      <TableHeader />
      {data.map((dataItem, index)=>{
        return(
            <TableBody key={index} name={dataItem.name} position={dataItem.position} status={dataItem.status} />
        )
      })}
    </table>
  );
};
