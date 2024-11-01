import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for styling

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setError(''); // Clear any previous errors
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                email, 
                password, 
                name,
                username,
                address,
                mobile
            });
            localStorage.setItem('token', response.data.token);

            // Redirect to the products page
            navigate('/products');
        } catch (err) {
            console.error('Error signing up:', err);
            setError(err.response?.data?.msg || 'Failed to sign up');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
                className="signup-input"
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                className="signup-input"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className="signup-input"
            />
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                className="signup-input"
            />
            <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                placeholder="Address" 
                className="signup-input"
            />
            <input 
                type="text" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                placeholder="Mobile" 
                className="signup-input"
            />
            <button onClick={handleSignUp} className="signup-button">Sign Up</button>
        </div>
    );
};

export default SignUp;
