import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DogDetail from './DogDetail';
import './DogList.css';

const DogList = ({ dogs, searchTerm }) => {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
    };

    // Filter dogs based on the search term
    const filteredDogs = dogs.filter(dog =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dog-list-container">
            {/* Dog List Section on the left */}
            <div className="dog-list-section">
                <h1>Dog List</h1>
                <ul>
                    {filteredDogs.map((dog) => (
                        <li key={dog.id} onClick={() => handleDogClick(dog)}>
                            {dog.name}
                        </li>
                    ))}
                </ul>

                {/* Dog Detail Popup */}
                {selectedDog && <DogDetail dog={selectedDog} />}

                {/* Navigation Buttons */}
                <div className="navigation-buttons">
                    <Link to="/">
                        <button>Back to Dashboard</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>

            {/* Map Section on the right */}
            <div className="map-section">
                <MapContainer center={[33.749, -84.388]} zoom={12} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredDogs.map((dog) => (
                        dog.location && dog.location.lat && dog.location.lng ? (
                            <Marker
                                key={dog.id}
                                position={[dog.location.lat, dog.location.lng]}
                                eventHandlers={{
                                    click: () => handleDogClick(dog),
                                }}
                            >
                                <Popup>
                                    <h3>{dog.name}</h3>
                                    <p><strong>Breed:</strong> {dog.breed}</p>
                                    <p><strong>Age:</strong> {dog.age}</p>
                                    <p><strong>Description:</strong> {dog.description}</p>
                                </Popup>
                            </Marker>
                        ) : null
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default DogList;



//For the backend implementation
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogList = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = async () => {
            const response = await axios.get('/api/dogs');
            setDogs(response.data);
        };
        fetchDogs();
    }, []);

    // Render dog list...
};
*/