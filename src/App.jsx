import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setsearchTerm] = useState(""); // Ues for Search Movies
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            <img src="./hero.png" alt="Hero Banner" />
            Find <span className="text-gradient">Movies</span> You’ll Love
            Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}></Search>
      </div>
    </main>
  );
};

export default App;
