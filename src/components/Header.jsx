import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark headerColor">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">MyPOST</span>
      </div>
    </nav>
  );
}

export default Header;