import SearchBar from "../SearchBar";
import { useState } from "react";

export default function Hero({ onSearchResult }) {
  return (
    <section
      id="hero"
      className="section-padding-x text-dark-base min-h-[360px] lg:min-h-[480px] pt-24 md:pt-36"
    >
      <div className="max-w-screen-xl container flex flex-col gap-2 md:gap-4">
        <div className="">
          <h1 className="text-blue-base text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2">
            Pictify
          </h1>
          <p className="font-medium text-base sm:text-xl lg:text-2xl">
            Your Creative Companion to Discover and Save Stunning Images.
          </p>
        </div>
        <SearchBar onSearchResult={onSearchResult} />
      </div>
    </section>
  );
}
