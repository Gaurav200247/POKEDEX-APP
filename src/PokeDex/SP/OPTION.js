import React from "react";
import { ImCross } from "react-icons/im";
import "../STYLES/CSS/OPTION.css";

const OPTION = ({ moves }) => {
  const [info, setinfo] = React.useState("");

  const ShowMove = (e) => {
    const url = e.target.value;
    getdata(url);
  };

  const getdata = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setinfo((newInfo) => {
          newInfo = data.effect_entries.map((item) => {
            return item.language.name === "en" ? item.short_effect : "";
          });
          return newInfo;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <span className=" moves-container">
      <h3 style={{ color: "crimson" }}>All Moves Info :</h3>
      <select onClick={(e) => ShowMove(e)}>
        {moves.map((item, index) => {
          return (
            <option key={index} value={`${item.move.url}`}>
              {item.move.name.toUpperCase()}
            </option>
          );
        })}
      </select>
      <div className={`moves-info-modal  show-moves-info `}>
        <div className="moves-modal-content" style={{ color: "yellowgreen" }}>
          {info ? info : "Select the Move from the given Option for their Info"}
        </div>
      </div>
    </span>
  );
};

export default OPTION;
