import React from "react";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { HeroSection } from "./components/hero/HeroSection";
import { FooterBar } from "./components/footer/FooterBar";
import { Card } from "./components/card/Card";
import "./App.css";

type Card = {
  icon: string;
  title: string;
  description: string;
};

const App: React.FC = () => {

  const cardsData: Card[] = [
    {
      icon: "🚀",
      title: "Rapidez",
      description: "Carga optimizada para la web moderna.",
    },
    {
      icon: "📱",
      title: "Responsivo",
      description: "Se adapta a cualquier tamaño de pantalla.",
    },
    {
      icon: "🎨",
      title: "Personalizable",
      description: "Diseño limpio basado en estándares CSS.",
    },
    {
      icon: "⚡",
      title: "Eficiente",
      description: "Menos código, más rendimiento.",
    },
    {
      icon: "🔧",
      title: "Fácil de usar",
      description: "Interfaz intuitiva y fácil de navegar.",
    },
    {
      icon: "🌐",
      title: "Accesible",
      description: "Compatible con tecnologías de asistencia.",
    },
    {
      icon: "🔒",
      title: "Seguro",
      description: "Protección contra amenazas y vulnerabilidades.",
    },
    {
      icon: "💡",
      title: "Innovador",
      description: "Soluciones creativas para problemas comunes.",
    }
  ];

  return (
    <div className="main-wrapper">
      <HeaderComponent />
      <HeroSection />
      <div className="grid-container">
        {cardsData.map((card, index) => {
          return (
            <Card key={index} icon={card.icon} title={card.title} description={card.description}/>
          );
        })}
      </div>
      <FooterBar />
    </div>
  );
};

export default App;
