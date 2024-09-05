import { fetchImages } from "../../services/apiFetcher";
import ImageCard from "./ImageCard";
import { useState } from "react";

// grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
export default function ImageList({ searchResults }) {
  return (
    <div className="section-padding-x text-dark-base md:pt-16">
      <div className="container max-w-screen-xl columns-2 md:columns-3 lg:columns-4">
        <ImageCard searchResult={searchResults} />
      </div>
    </div>
  );
}
