



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Styles/plan.css"
import Footer from "./Footer"

const PlanList = () => {
  const [plans, setPlans] = useState([]);  
  const [expandedPlanIndex, setExpandedPlanIndex] = useState(null);  

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/plan/')
      .then(response => {
        console.log(response.data.plans);  
        setPlans(response.data.plans);  
      })
      .catch(error => {
        console.error('There was an error fetching the plan data!', error);
      });
  }, []);

  
  const toggleDetails = (index) => {
    setExpandedPlanIndex(expandedPlanIndex === index ? null : index);  
  };

  return (
    <div className='pln'>
      <div className="plans-container">
        <h1 className="title">Our Gym Plans</h1>
        {plans.length > 0 ? (
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className="plan-box">
                <h2>{plan.planname}</h2>
                <p className="plan-price">₹{plan.price}</p>
                <button className="btn-details" onClick={() => toggleDetails(index)}>
                  {expandedPlanIndex === index ? 'Hide Details' : 'Details'}
                </button>
                {expandedPlanIndex === index && (
                  <div className="plan-details">
                    <p className="plan-features-title"><strong>Features:</strong></p>
                    <ul className="plan-features">
                      {plan.features.split('\n').map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-plans-message">No plans available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PlanList;
