// url: https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LatestPhoto() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12"
      )
      .then((res) => {
        setPhotos(res.data);
      });
  }, []);

  console.log(photos);
  return (
    <div className="row">
      {photos &&
        photos.map((photo) => (
          <div key={photo.id} className="col-lg-3">
            <div className="single-photo-item">
              <a href="/">
                <img src={photo.urls.small} alt="" />
                <h5>
                  {photo.description
                    ? photo.description.slice(0, 15)
                    : "No title"}
                </h5>
                <p className="cat-name">
                  By - {photo.user.first_name} {photo.user.last_name}
                </p>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
