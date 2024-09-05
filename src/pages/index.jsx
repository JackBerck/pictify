import { useState } from "react";
import Hero from "../components/Hero";
import ImageList from "../components/ImageList";

export default function Homepage() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Hero onSearchResult={setSearchResults} />
      <ImageList searchResults={searchResults} />
    </>
  );
}
