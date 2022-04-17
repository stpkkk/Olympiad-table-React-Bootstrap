import React from "react";
import TableRow from "./TableRow";

const Table = ({ participants, sortByName }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            scope="col"
            onClick={() => {
              console.log("id");
            }}
          >
            id
          </th>
          <th
            scope="col"
            onClick={() => {
              console.log("name");
            }}
          >
            Имя
          </th>
          <th scope="col" onClick={sortByName}>
            Очки
          </th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant, index) => {
          return (
            <TableRow
              key={participant.id}
              id={index + 1}
              name={participant.name}
              points={participant.points}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
