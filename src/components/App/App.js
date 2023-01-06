import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

export default function App() {
  const [returnedBusinesses, setReturnedBusinesses] = useState([]);
  const [click, setClick] = useState(0);

  async function searchYelp(term, location, sortBy) {
    var data = { term, location, sortBy };

    const local = "http://localhost:9000/.netlify/functions/server";
    // const host = "https://ashishkaserver.netlify.app/.netlify/functions/server";

    await fetch(local + "/yelp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setReturnedBusinesses(data.body);
        console.log(data);
      });
  }

  return (
    <div className="App">
      <h1>Dinerley</h1>
      <SearchBar searchYelp={searchYelp} setClick={setClick} click={click} />
      <BusinessList businesses={returnedBusinesses} />
    </div>
  );
}
