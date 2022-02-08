import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../Components/Loading";
import HEAD from "../SP/HEAD";
import LEFT from "../SP/LEFT";
import OPTION from "../SP/OPTION";
import RIGHT from "../SP/RIGHT";
import STATS from "../SP/STATS";

import "../STYLES/CSS/SP.css";

const SinglePokemon = () => {
  const { id } = useParams();
  const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

  const [Details, setDetails] = React.useState(null);
  const [incomingError, setIncomingError] = React.useState(false);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.name);
    if (data) {
      setDetails(data);
    } else {
      setIncomingError(true);
    }
  };

  React.useEffect(() => {
    getData(`${mainUrl}${id}`);
  }, [id]);

  return (
    <div className="single-pokemon-page">
      {Details ? (
        <div className="sp-container">
          <HEAD {...Details} />
          <div className="sp-middle">
            <LEFT {...Details} />
            <RIGHT {...Details} />
          </div>
          <div className="foot">
            <STATS {...Details} />
            <OPTION {...Details} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SinglePokemon;
