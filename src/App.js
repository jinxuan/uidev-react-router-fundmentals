import "./styles.css";

import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const About = () => <h1>About</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
