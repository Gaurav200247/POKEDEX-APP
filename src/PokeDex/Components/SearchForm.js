import React from "react";
import { useGlobalContext } from "../Context";
import "../STYLES/CSS/SearchForm.css";

const SearchForm = () => {
  const { SearchText, setSearchText, isError } = useGlobalContext();

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Pokemon Here..."
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span
          className={`error-alert ${
            SearchText ? (isError ? "red" : "green") : null
          }`}
        >
          {SearchText
            ? isError
              ? "Item Not Found !! Please Check Item Name or Search Item in Below List."
              : "Item Found !! Clear The Field To See whole List Again."
            : "Enter Pokemon Name in the Given Field !!"}
        </span>
      </form>
    </div>
  );
};

export default SearchForm;
