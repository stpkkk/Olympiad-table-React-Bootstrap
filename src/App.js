import React, { useState } from "react";
import "../src/index.css";
import { PlayersForm } from "./components/PlayersForm";
import Table from "./components/Table";

function App() {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participantName) => {
    if (participantName) {
      const newParticipant = {
        id: Math.random().toString(36).substr(2, 9),
        name: participantName,
        points: Math.floor(Math.random() * 101),
      };
      setParticipants([...participants, newParticipant]);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Олимпиада</h1>
      </header>
      <PlayersForm addParticipant={addParticipant} />
      {participants.length ? <Table participants={participants}></Table> : null}
    </div>
  );
}

export default App;
