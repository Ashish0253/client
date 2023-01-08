import React, { useState } from "react";

export default function RenderSortByOptions() {
  const [sortBy, setSortBy] = useState("best_match");

  return Object.keys(sortByOptions).map((sortByOption) => {
    let sortByOptionValue = sortByOptions[sortByOption];

    return (
      <li
        key={sortByOptionValue}
        className={getSortByClass(sortByOptionValue)}
        onClick={handleSortByChange(sortByOptionValue)}
      >
        {sortByOption}
      </li>
    );
  });
}
