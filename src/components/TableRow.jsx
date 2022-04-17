import React from "react";

const tableRow = ({ id, name, points }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{points}</td>
    </tr>
  );
};

export default tableRow;
