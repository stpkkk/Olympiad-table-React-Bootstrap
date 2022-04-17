import React, { useState } from "react";

export const PlayersForm = ({ addParticipant }) => {
  const [participantInput, setParticipantInput] = useState("");

  const handleChange = (event) => {
    setParticipantInput(event.currentTarget.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleClick = (event) => {
    handleSubmit(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addParticipant(participantInput);
    setParticipantInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="participants">Участники</label>
        <input
          value={participantInput}
          className="form-control"
          id="participants"
          type="text"
          placeholder="Введите имена участников"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <small id="participants-help" className="form-text text-muted">
          Доступны только кириллические буквы и запятая
        </small>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Добавить
      </button>
    </form>
  );
};
