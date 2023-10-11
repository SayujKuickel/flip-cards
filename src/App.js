import { useState } from "react";
import questions from "./questions.js";

export default function App() {
  const [openCard, setOpenCard] = useState(null);

  const handleToggleOpen = (cardId) => {
    if (openCard === cardId) {
      setOpenCard(null);
    } else {
      setOpenCard(cardId);
    }
  };

  return (
    <>
      <h1>React Questions</h1>
      <Cards openCard={openCard} handleToggleOpen={handleToggleOpen} />
    </>
  );
}

function Cards({ openCard, handleToggleOpen }) {
  return (
    <div className="card-container">
      {questions.map((value) => (
        <Card
          key={value.id}
          value={value}
          isOpen={openCard === value.id}
          handleToggleOpen={handleToggleOpen}
        />
      ))}
    </div>
  );
}
function Card({ value, isOpen, handleToggleOpen }) {
  const openStyles = {
    backgroundColor: "#555",
    color: "white",
  };

  return (
    <div className="card">
      <button
        onClick={() => handleToggleOpen(value.id)}
        style={isOpen ? openStyles : {}}
      >
        <span className="id">{value.id}</span>
        {!isOpen ? (
          <>
            <h3>{value.question}</h3>
          </>
        ) : (
          <>
            <h4>{value.question}</h4>
            <h3>{value.answer}</h3>
          </>
        )}
      </button>
    </div>
  );
}
