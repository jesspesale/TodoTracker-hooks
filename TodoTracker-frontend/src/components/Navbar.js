import React from 'react'
import {Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/" className="nav">
        Home
      </Link>
      <Link to="/lists" className="nav">
        All Lists
      </Link>
      <Link to="/lists/new" className="nav">
        Create a new List
      </Link>
    </div>
  );
}
