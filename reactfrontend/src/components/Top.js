import React from 'react';
import '../Styles/all.css'
import '../Styles/top.css'


const Top = () => {

  const handleButtonClick = () => {
    
    
     window.location.href = "http://localhost:3000/Member";
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>GOLDEN FITNESS</h1>
          <a href='/login'>
          <button className="btn btn-primary" onClick={handleButtonClick}>
           Join Now<i className="fas fa-arrow-right" style={{ marginLeft: '8px' ,color:'black'}}></i>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
