// src/components/DogList.js
import React, { useState } from 'react';
import DogDetail from './DogDetail';
import { Link } from 'react-router-dom';
import './global.css';

const DogList = ({ dogs, searchTerm }) => {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    // Filter dogs based on the search term
    const filteredDogs = dogs.filter(dog => dog.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h1>Dog List</h1>
            <ul>
                {filteredDogs.map((dog) => (
                    <li key={dog.id} onClick={() => handleDogClick(dog)}>
                        {dog.name}
                    </li>
                ))}
            </ul>

            {selectedDog && <DogDetail dog={selectedDog} />}
            <div className="navigation-buttons">
                <Link to="/">
                    <button>Back to Dashboard</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default DogList;
