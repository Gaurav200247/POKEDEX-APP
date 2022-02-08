import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import OPTION from "./OPTION";

const RIGHT = ({
  height,
  types,
  weight,
  abilities,
  base_experience,
  moves,
}) => {
  const HeightConverter = (height) => {
    if (height < 100) {
      let inches = Math.trunc((height / 10) * 39.37);
      let foot = Math.trunc(inches / 12);
      return `${foot}' ${inches}''`;
    } else {
      return height;
    }
  };

  const WeightConverter = (weight) => {
    let lbs = Math.trunc(weight * 2.205) / 10;
    return lbs;
  };

  const [info, setinfo] = useState("");
  const [showModal, setshowModal] = useState(false);

  const ShowInfo = async () => {
    try {
      const resp = await fetch(abilities[0].ability.url);
      const fetcheddata = await resp.json();
      if (fetcheddata) {
        setinfo(fetcheddata);
        setshowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-container">
      {/* ---------------------------- */}
      <div className="info-container">
        <div className={`info-modal ${showModal ? "show" : null}`}>
          <div className="cross-container">
            <ImCross
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => setshowModal(false)}
            />
          </div>
          <span className="content">
            {info
              ? info.effect_entries.map((item) =>
                  item.language.name === "en" ? item.short_effect : null
                )
              : null}
          </span>
        </div>

        <span className="info sp-height">
          Height: {HeightConverter(height)}
        </span>

        <span className="info sp-weight">
          Weight: {WeightConverter(weight)} lbs
        </span>

        <span className="info sp-exp">Base EXP : {base_experience}</span>

        <span className="info sp-ability">
          Abilities : {"\t\t"} {abilities[0].ability.name.toUpperCase()}
          <BsFillQuestionCircleFill
            className="ability-info-btn"
            onClick={ShowInfo}
          />
        </span>
      </div>
      {/* ---------------------------- */}

      {/* ---------------------------- */}
      <div className="sp-type-container-outer">
        <h4
          style={{ marginLeft: "10px", color: "crimson", fontWeight: "bolder" }}
        >
          Type
        </h4>
        <div className="sp-type-container">
          {types.map((item, index) => {
            return (
              <a
                className={`${item.type.name} sp-type`}
                key={index}
                href={`https://pokemon.fandom.com/wiki/${
                  item.type.name[0].toUpperCase() + item.type.name.substring(1)
                }_type`}
              >
                {item.type.name[0].toUpperCase() + item.type.name.substring(1)}
              </a>
            );
          })}
        </div>
      </div>
      {/* ---------------------------- */}

      {/* ---------------------------- */}
    </div>
  );
};

export default RIGHT;
