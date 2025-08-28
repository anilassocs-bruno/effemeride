import React from "react";
import "./App.css";

function App() {
  // Sostituisci 'anilassocs-bruno' con il nome che preferisci
  const nome = "anilassocs-bruno";

  const handlePinClick = () => {
    alert("Hai cliccato su Pin Nome!");
  };

  const handleEpinClick = () => {
    alert("Hai cliccato su Epin!");
  };

  return (
    <div className="App">
      <header className="home-header">
        <h1>Effemeride</h1>
      </header>
      <main className="home-main">
        <div className="nome">{nome}</div>
        <div className="pulsanti">
          <button className="home-btn" onClick={handlePinClick}>
            Pin Nome
          </button>
          <button className="home-btn" onClick={handleEpinClick}>
            Epin
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;