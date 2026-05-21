import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      ˝<div className="card-icon">{icon}</div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
