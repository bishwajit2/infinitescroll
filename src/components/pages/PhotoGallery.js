import React from "react";
import LatestPhoto from "../LatestPhoto";

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="photo-heading">Latest Photo</h2>
          </div>
        </div>
        <LatestPhoto />
      </div>
    </div>
  );
};

export default PhotoGallery;
