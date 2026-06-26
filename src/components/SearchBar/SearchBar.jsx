import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (city) onSearch(city);
  };

  return (
    <form className="search" onSubmit={submit}>
      <input
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;