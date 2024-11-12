import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Login = ({ onSignupSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/', {
                email: email,
                password: password,
            });

            if (response.status === 200 || response.status === 201) {
                setSuccess('Login successful');
                if (onSignupSuccess) {
                    onSignupSuccess(); 
                }
                setTimeout(() => {
                    window.location.href = '/'; 
                }, 1000);
            } else {
                setError('An error occurred during login.');
            }
        } catch (error) {
            console.error('Signup error:', error.response || error);
            setError('An error occurred during login.');
        }
    };

    return (
        <div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Log in</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                {success && <div className="alert alert-success" role="alert">{success}</div>}
                                <button type="submit" className="btn btn-primary w-100">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>


    );
};

export default Login;
