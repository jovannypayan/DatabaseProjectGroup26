import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Redirect to the sign-up page
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Log in to your account</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <div className="login-footer">
                    <Link to="/">Back to Dashboard</Link>
                </div>
                <button onClick={handleSignUpRedirect} className="signup-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Login;
