import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/Users/benjamin/Documents/GameLog/GameLog/gamelog/src/components/App.scss";
import Header from "./header";
import Card from "./card";
import Home from "../pages/Home";
import Games from "../pages/Games";
import About from "../pages/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Card />
    </div>
  );
}
