import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <>
      <button className="square" onClick={onClick}>
        <span> {value}</span>
      </button>
    </>
  );
};

export default Square;
