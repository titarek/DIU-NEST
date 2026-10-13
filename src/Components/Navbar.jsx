import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  const links = [
    { key: 'halls', label: 'Browse Halls' },
    { key: 'apply', label: 'Apply' },
    { key: 'track', label: 'Track Application' },
  ];

  return (
    <header className="navbar">
      <div className="navbarbrand">
        <span className="navbarmark">DIU</span>
        <span className="navbarname">Nest</span>
      </div>

      <nav className="navbarlinks">
        {links.map((link) => (
          <button
            key={link.key}
            className={navbar__link ${currentPage === link.key ? 'active' : ''}}
            onClick={() => onNavigate(link.key)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
