import React, { useState, useEffect, useRef } from "react";
import { MdCancel } from "react-icons/md";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // To store search results
  const [nutrients, setNutrients] = useState(null); // To store nutrient data of a selected item
  const [error, setError] = useState(null);
  const [common, setCommon] = useState([]); // To store common food items from search results
  const [branded, setBranded] = useState([]); // To store branded food items from search results
  const show = useRef(null);

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
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
      setCommon(data.common || []);
      setBranded(data.branded || []);
    } catch (err) {
      setError(err.toString());
    }
  };

  // Function to handle displaying nutrient data
  const fetchNutrientData = async (foodName) => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        {
          method: "POST",
          headers: {
            "x-app-id": "e7116065",
            "x-app-key": "3b93010629df15ac33bdf9235b3c3ec5",
            "content-Type": "application/json",
          },
          body: JSON.stringify({ query: foodName }), // Sending food name to get nutrient data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch nutrient data");
      }

      const data = await response.json();
      setNutrients(data.foods[0]); // Set nutrient data for the first food item
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <>
      <div className="foodsearch101">
        <h1>Food Search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Displaying search results */}
        <div>
          {common.length > 0 && (
            <div className="fooddisplay202">
              <ul>
                {common.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => fetchNutrientData(item.food_name)}
                    className="checkmuj2"
                  >
                    {item.food_name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {branded.length > 0 && (
            <div className="fooddisplay202">
              <ul>
                {branded.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => fetchNutrientData(item.food_name)}
                    className="checkmuj2"
                  >
                    {item.food_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Displaying nutrient data */}
        <div ref={show} className="fooddisplay2xx">
          {nutrients && (
            <div className="showfood202">
              <div className="showfood203">
                <h2>Nutrient Data</h2>
                <p>
                  <strong>Food Name:</strong> {nutrients.food_name}
                </p>
                <p>
                  <strong>Calories:</strong> {nutrients.nf_calories}
                </p>
                <p>
                  <strong>Protein:</strong> {nutrients.nf_protein} g
                </p>
                <p>
                  <strong>Fat:</strong> {nutrients.nf_total_fat} g
                </p>
                <p>
                  <strong>Carbohydrates:</strong>{" "}
                  {nutrients.nf_total_carbohydrate} g
                </p>
                {/* Display more nutrients as needed */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fooddisplay2">
        <h1>Food Display</h1>
        <div className="fooddisplay202"></div>
      </div>
    </>
  );
};

export default Dashboard;
