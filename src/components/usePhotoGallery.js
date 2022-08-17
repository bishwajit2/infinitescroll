import { useEffect, useState } from "react";

function usePhotoGallery(query, pageNumber) {
  const [query, setQuery] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect({
    method: "GET",
  });
  return null;
}

export default usePhotoGallery;
