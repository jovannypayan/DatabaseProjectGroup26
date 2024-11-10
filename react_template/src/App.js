// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup'; // Import the Signup component
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';
import Header from './components/Header';


function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const sampleDogs = [
        { id: 1, name: 'Bella', breed: 'Labrador', age: 3, description: 'Friendly and energetic.', adopted: false, image: 'url_to_image', location: { lat: 33.7488, lng: -84.3880 } },
        { id: 2, name: 'Max', breed: 'German Shepherd', age: 5, description: 'Loyal and protective.', adopted: true, image: 'url_to_image', location: { lat: 33.7490, lng: -84.3900 } },
        { id: 3, name: 'Rocky', breed: 'Bulldog', age: 2, description: 'Gentle and playful.', adopted: false, image: 'url_to_image', location: { lat: 33.7500, lng: -84.3910 } },
        // Add more dog objects as needed
    ];
    



    return (
        <Router>
            <Header onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dog-list" element={<DogList dogs={sampleDogs} searchTerm={searchTerm} />} />
                <Route path="/dog-detail" element={<DogDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
//<Route path="/dog-list" element={<DogList dogs={sampleDogs} searchTerm={searchTerm} />} />