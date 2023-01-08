import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  function getSortByClass(sortByOption) {
    return sortBy === sortByOption ? "active" : "";
  }

  function handleSortByChange(sortByOption) {
    setSortBy(sortByOption);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSearch(event) {
    props.searchYelp(term, location, sortBy);

    event.preventDefault();
  }

  function RenderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];

      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          // onClick={setSortBy(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          <RenderSortByOptions />
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange={handleTermChange} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="/#" onClick={handleSearch}>
          Search
        </a>
      </div>
    </div>
  );
}
