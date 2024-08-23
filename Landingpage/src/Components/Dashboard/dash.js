import React, { useState } from "react";

const Admin = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
        {
          headers: {
            "x-app-id": "e7116065",
            "x-app-key": "3b93010629df15ac33bdf9235b3c3ec5",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <div>
      <h1>Nutrition Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food item"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>Error: {error}</p>}

      <div>
        {results && results.common && results.common.length > 0 && (
          <ul>
            {results.common.map((item) => (
              <li key={item.food_name}>{item.food_name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Admin;
