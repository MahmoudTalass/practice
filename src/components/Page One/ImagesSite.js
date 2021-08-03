import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ImagesList from "./ImagesList";
import "./ImagesSite.css";

const ImagesSite = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("random");
  const [page, setPage] = useState(3);

  const accessKey = "QLj4MQhF63kxxLVpx__mlrHP9oM1MjVXlXrKPT9SZE8";

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=30`
      )
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page);
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div className="main-imagesSite-container">
      <SearchForm setImages={setImages} setQuery={setQuery} />
      <ImagesList images={images} />
    </div>
  );
};

export default ImagesSite;
