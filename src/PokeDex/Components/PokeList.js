import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import PokeCard from "./PokeCard";

const PokeList = () => {
  const mounted = useRef(false);
  const { Data, NewPokeCard, setnum, PokeSearched } = useGlobalContext();

  useEffect(() => {
    if (!mounted.current) {
      // console.log("moounted = " + mounted.current);
      mounted.current = true;
      return;
    }
    if (!NewPokeCard) {
      // console.log("NewPokeCard = false" + NewPokeCard);
      return;
    }
    // console.log("NewPokeCard = " + NewPokeCard);
    setnum((oldnum) => oldnum + 20);
  }, [NewPokeCard]);

  return (
    <div className="pokelist">
      {Data.results ? (
        // if data is not searched
        Data.results.map((item, index) => {
          return <PokeCard key={index} {...item} />;
        })
      ) : PokeSearched ? (
        <div className="pokecard-container">
          <Link
            className="pokecard-link"
            to={`/singlepokemon/${PokeSearched.id}`}
          >
            <div className="pokecard">
              {Data.id < 100 ? (
                <h4 className="id">#0{PokeSearched.id}</h4>
              ) : (
                <h4 className="id">#{PokeSearched.id}</h4>
              )}
              <img
                className="pokecard-thumbnail"
                src={PokeSearched.sprites.other.dream_world.front_default}
                alt={PokeSearched.name}
              />
              <div className="pokecard-name-container">
                {" "}
                <h6 className="pokecard-name">
                  {PokeSearched.name.toUpperCase()}
                </h6>
              </div>
              <div className="type-container">
                {" "}
                {PokeSearched.types.map((item, index) => {
                  return (
                    <span className={`${item.type.name} type`} key={index}>
                      {item.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PokeList;
