import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const PokeCard = ({ name, url }) => {
  const [PokeInfo, setPokeInfo] = useState(null);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setPokeInfo(data);
  };
  useEffect(() => {
    getData(url);
  }, [url]);

  return (
    <div className="pokecard-container">
      {PokeInfo ? (
        <Link className="pokecard-link" to={`/singlepokemon/${PokeInfo.id}`}>
          <div className="pokecard">
            {PokeInfo.id < 100 ? (
              <h4 className="id">#0{PokeInfo.id}</h4>
            ) : (
              <h4 className="id">#{PokeInfo.id}</h4>
            )}
            <img
              className="pokecard-thumbnail"
              src={PokeInfo.sprites.other.dream_world.front_default}
              alt={name}
            />
            <div className="pokecard-name-container">
              {" "}
              <h6 className="pokecard-name">{name.toUpperCase()}</h6>
            </div>
            <div className="type-container">
              {" "}
              {PokeInfo.types.map((item, index) => {
                return (
                  <span className={`${item.type.name} type`} key={index}>
                    {item.type.name[0].toUpperCase() +
                      item.type.name.substring(1)}
                  </span>
                );
              })}
            </div>
          </div>
        </Link>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PokeCard;
