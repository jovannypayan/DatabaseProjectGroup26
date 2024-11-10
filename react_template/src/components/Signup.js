import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
    const [role, setRole] = useState('adopter'); // Default to 'adopter'
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Handle signup logic here
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        className="login-input"
                    >
                        <option value="adopter">Adopter</option>
                        <option value="employee">Employee</option>
                    </select>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className="login-input"
                    />
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Name" 
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Confirm Password" 
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Sign Up</button>
                </form>
                <div className="login-footer">
                    <Link to="/login">Already have an account? Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
