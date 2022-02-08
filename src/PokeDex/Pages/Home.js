import React from "react";

import PokeList from "../Components/PokeList";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <div className="home-page">
      <SearchForm />
      <PokeList />
    </div>
  );
};

export default Home;
