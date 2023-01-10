import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

const fetch = require("cross-fetch");

export default function App() {
  const [returnedBusinesses, setReturnedBusinesses] = useState([]);
  const [click, setClick] = useState(0);

  async function searchYelp(term, location, sortBy) {
    var data = { term, location, sortBy };

    const localProxy =
      "https://ashish-ka-serverless-project.netlify.app/.netlify/functions/";
    // const host = "/.netlify/functions/";

    await fetch(localProxy + "yelp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        term: data.term,
        location: data.location,
        sortBy: data.sortBy,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReturnedBusinesses(data);
        console.log(data);
      });

    // await fetch(host + "/", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  return (
    <div className="App">
      <h1>Dinerley</h1>
      <SearchBar searchYelp={searchYelp} setClick={setClick} click={click} />
      <BusinessList businesses={returnedBusinesses} />
    </div>
  );
}
