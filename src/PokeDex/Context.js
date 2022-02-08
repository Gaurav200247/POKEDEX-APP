import React, { useContext, useEffect, useState } from "react";

const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isError, setisError] = useState(false);
  const [Data, setData] = useState([]);
  const [NewPokeCard, setNewPokeCard] = useState(false);
  const [num, setnum] = useState(25);
  const [SearchText, setSearchText] = useState("");
  const [PokeSearched, setPokeSearched] = useState(null);
  const [toggle, settoggle] = useState(false);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      if (data || SearchText === "") {
        setData(data);
        setisError(false);
      }
      if (SearchText) {
        setPokeSearched(data);
        setisError(false);
      } else if (data === "Not Found" && SearchText) {
        setisError(true);
      } else {
        setisError(true);
      }
      setNewPokeCard(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (SearchText) {
      getData(`${mainUrl}${SearchText}`);
    } else {
      getData(`${mainUrl}?limit=${num}`);
    }
  }, [num, SearchText]);

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 20
    ) {
      setNewPokeCard(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isError,
        Data,
        NewPokeCard,
        setnum,
        SearchText,
        setSearchText,
        PokeSearched,
        setPokeSearched,
        toggle,
        settoggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// useGlobalContext custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
