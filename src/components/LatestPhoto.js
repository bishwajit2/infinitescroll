// url: https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LatestPhoto() {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          pageNumber
      )
      .then((res) => {
        setPhotos(res.data);
        setLoading(false);
      });
  }, [pageNumber]);

  const loadNextPage = () => {
    setPageNumber(pageNumber + 1);
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          pageNumber
      )
      .then((res) => {
        setPhotos(res.data);
        setLoading(false);
      });
  };

  const searchQuery = (e) => {
    setQuery(e.target.value);
    setSearching(false);
  };

  const searchTrigger = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          pageNumber +
          "&query=" +
          query
      )
      .then((res) => {
        setPhotos(res.data.results);
        setLoading(false);
        setSearching(true);
        setPageNumber(2);
      });
  };

  const loadNextSearchPage = () => {
    setPageNumber(pageNumber + 1);
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          pageNumber +
          "&query=" +
          query
      )
      .then((res) => {
        setPhotos(res.data.results);
        setLoading(false);
        setSearching(true);
        setPageNumber(pageNumber + 1);
      });
  };

  console.log(photos);
  if (loading) {
    return (
      <div className="row">
        <div className="col">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h2 className="photo-heading">
            {searching ? query : "Latest Photo"}
          </h2>
        </div>
        <div className="col-lg-6">
          <form action="" onSubmit={searchTrigger}>
            <input type="text" value={query} onChange={searchQuery} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="photoGrid">
            {photos &&
              photos.map((photo) => (
                <div key={photo.id} className="single-photo-item">
                  <a href="/">
                    <div className="image-wrapper">
                      <img src={photo.urls.small} alt="" />
                      <div className="image-info">
                        <div className="profile-image">
                          <img src={photo.user.profile_image.small} alt="" />
                        </div>
                        <div className="avatar-info">
                          <h5>
                            {photo.user.first_name} {photo.user.last_name}
                          </h5>
                          <p className="cat-name"></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {searching ? (
            <button type="button" onClick={loadNextSearchPage}>
              Page No - {pageNumber}
            </button>
          ) : (
            <button type="button" onClick={loadNextPage}>
              Page No - {pageNumber}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
