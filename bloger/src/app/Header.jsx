import React from 'react';
import './index.css';

function Header() {
  return (
    <header className="header">
      <a href="/">
      <h1>Bloger.com</h1></a>
      <div className="search-box">
        <input type="search" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;