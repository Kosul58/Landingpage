import React from "react";
import { useState, useEffect, useRef } from "react";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [common, setcommon] = useState([]);
  const show = useRef(null);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/natural/nutrients?query=${query}`,
        {
          headers: {
            "x-app-id": "e7116065",
            "x-app-key": "3b93010629df15ac33bdf9235b3c3ec5",
            "content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const j = data.common;
      setcommon(j);
      setResults(data);
      console.log(common);
    } catch (err) {
      setError(err.toString());
    }
  };

  const showfood = (item) => {
    console.log(item);
    show.current.classList.remove("signblock");
  };
  return (
    <>
      <div className="foodsearch101">
        <h1>Food search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <div>
            {common.length > 0 && (
              <ul>
                {common.map((item, index) => (
                  <div className="checkmuj">
                    <li key={index}>{item.food_name}</li>
                    <div className="showfood202">Show</div>
                    <div className="showfood202">Add</div>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div ref={show} className="fooddisplay2xx"></div>
      </div>
      <div className="fooddisplay2">
        <h1>Food Display</h1>
        <div className="fooddisplay202"></div>
      </div>
    </>
  );
};

export default Dashboard;
