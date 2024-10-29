import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setError(''); // Clear any previous errors
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                email, 
                password, 
                name
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
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
