import React from "react";

interface TableBodyProps {
  name: string;
  position: string;
  status: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ name, position, status }) => {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{status}</td>
      </tr>
    </tbody>
  );
};
