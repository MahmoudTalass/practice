import React from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ setImages, setQuery }) => {
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setImages([]);
    }
  };
  return (
    <div className="image-form-container">
      <FaSearch className="searchIcon"/>
      <input type="text" onKeyDown={searchImages} placeholder='search...' />
    </div>
  );
};

export default SearchForm;
