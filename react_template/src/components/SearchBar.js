// src/components/SearchBar.js
import React, { useState } from 'react';
import './global.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Call the function passed down from the parent component
        setSearchTerm(''); // Clear the input after search
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search for a dog..."
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
