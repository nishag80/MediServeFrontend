import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await fetch('http://localhost:9090/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        throw new Error('Login failed');
      }

      const loginData = await loginResponse.json();
      const token = loginData.token;
      localStorage.setItem('token', token);

      const salesResponse = await fetch('http://localhost:9090/api/v1/dashboard', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!salesResponse.ok) {
        throw new Error('Failed to fetch total sales amount');
      }

      const salesData = await salesResponse.json();
      const totalSaleAmt = salesData.data;

      navigate('/dashboard', { state: { totalSaleAmt } });
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
