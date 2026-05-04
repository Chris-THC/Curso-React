interface UserProps {
  name: string;
  role: string;
}

export const UserCard = ({ name, role }: UserProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", maxWidth: "200px", backgroundColor: "#acd4f3", borderRadius: "5px" }}>
      <h3>{name}</h3>
      <p>Cargo: {role}</p>
    </div>
  );
};
