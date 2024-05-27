import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        setMessage('');
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your password reset logic here, such as sending an email to the user with a reset link.
        // For demonstration purposes, let's just show a message that the reset link has been sent.
        setMessage(`Password reset link has been sent to ${email}`);
        setEmail('');
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Reset Password
                </button>
            </form>
            <p className="mt-3">
                Remember your password? <Link to="/">Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;
