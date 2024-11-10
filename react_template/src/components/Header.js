import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="site-title">PawMatch</Link>
            </div>
            <div className="header-right">
                <nav className="nav-links">
                    <Link to="/">Dashboard</Link>
                    <Link to="/dog-list">Dogs</Link>
                    <Link to="/dogdetails">Dog Details</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a dog..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button>Search</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
