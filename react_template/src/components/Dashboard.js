// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './global.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-summary">
                <div className="summary-card">
                    <h2>Total Dogs</h2>
                    <p>45</p>
                </div>
                <div className="summary-card">
                    <h2>Adoptions This Month</h2>
                    <p>12</p>
                </div>
                <div className="summary-card">
                    <h2>Available for Adoption</h2>
                    <p>30</p>
                </div>
            </div>
            <div className="dashboard-content">
                <h2>Recent Activity</h2>
                <ul>
                    <li>Adopted: Bella - Oct 25, 2024</li>
                    <li>Added: Max - Oct 24, 2024</li>
                    <li>Adopted: Rocky - Oct 23, 2024</li>
                </ul>
            </div>
            <div className="navigation-buttons">
                <Link to="/dog-list">
                    <button>View Dog List</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
