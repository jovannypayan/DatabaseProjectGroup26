import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
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

    // Google Maps container style
    const mapContainerStyle = {
        height: '100%',
        width: '100%',
    };

    // Center the map on Atlanta (default location)
    const center = { lat: 33.749, lng: -84.388 };

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
                <LoadScript
                    googleMapsApiKey="AIzaSyDMTJuQ-_KvHdKCfhoPejyrW531FjENfLU"
                    loadingElement={<div style={{ height: '100%', width: '100%' }}>Loading...</div>}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={12}
                    >
                        {filteredDogs.map((dog) => (
                            dog.location && dog.location.lat && dog.location.lng ? (
                                <Marker
                                    key={dog.id}
                                    position={{ lat: dog.location.lat, lng: dog.location.lng }}
                                    onClick={() => handleDogClick(dog)}
                                />
                            ) : null
                        ))}

                        {/* InfoWindow displays dog details when a dog is selected */}
                        {selectedDog && selectedDog.location && (
                            <InfoWindow
                                position={{ lat: selectedDog.location.lat, lng: selectedDog.location.lng }}
                                onCloseClick={() => setSelectedDog(null)}
                            >
                                <div>
                                    <h3>{selectedDog.name}</h3>
                                    <p><strong>Breed:</strong> {selectedDog.breed}</p>
                                    <p><strong>Age:</strong> {selectedDog.age}</p>
                                    <p><strong>Description:</strong> {selectedDog.description}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
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