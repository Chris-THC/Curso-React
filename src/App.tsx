import React from "react";
import { UserCard } from "./components/UserCard";
interface User {
  id: number;
  name: string;
  role: string;
}

const App: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "Jhon", role: "Developer" },
    { id: 2, name: "Thomas", role: "Designer" },
    { id: 3, name: "Aby", role: "Product Manager" },
  ];

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
};
export default App;
