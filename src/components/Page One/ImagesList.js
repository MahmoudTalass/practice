import React from "react";
import "./ImagesList.css";

const ImagesList = ({ images }) => {
  return (
    <div className="image-list-container">
      {images.map((image, key) => (
        <div key={key} className="direct-image-container">
          <img
            src={image.urls.small}
            alt={image.alt_description}
            width="450px"
            height="365px"
            className="direct-image"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
