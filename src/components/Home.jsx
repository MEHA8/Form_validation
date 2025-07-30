import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <h2>User Data</h2>
      <p className="mb-4">Click below to enter your information.</p>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => navigate('/form')}>
          Enter User data
        </button>
      </div>
    </div>
  );
};

export default Home;
