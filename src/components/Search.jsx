import React from "react";

const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.png" alt="Search" />
        <input
          type="text"
          placeholder="Serach thoungh thousands of movies"
          value={searchTerm} // You use value={searchTerm} to bind the input box to the React state.
          // React doesn't know how to "connect" the input box to searchTerm unless you explicitly tell it using value={searchTerm}.
          onChange={(event) => setsearchTerm(event.target.value)} // event is an object, and it contains a nested object called target, and that object has a property called value.
        />
      </div>
    </div>
  );
};

export default Search;
