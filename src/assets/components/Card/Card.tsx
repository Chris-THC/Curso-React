import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
