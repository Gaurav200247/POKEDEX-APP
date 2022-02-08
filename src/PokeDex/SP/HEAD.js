import React from "react";

const HEAD = ({ name, id }) => {
  return (
    <div className="sp-head">
      <h2 className="sp-name">
        {name.toUpperCase()}
        {"\t\t\t"}{" "}
        <span className="id"> {id < 100 ? `#0${id}` : `#${id}`}</span>
      </h2>
    </div>
  );
};

export default HEAD;
