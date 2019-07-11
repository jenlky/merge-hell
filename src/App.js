import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/profile";
import Stars from "./Stars";

function App() {
  return (
    <div className="App">
      <Stars />
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}

export default App;
