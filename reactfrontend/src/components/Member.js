
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Member = ({ onSignupSuccess }) => {
    const [name, setName] = useState('');
    const [phone_no, setPhone] = useState('');
    const [dob, setDob] = useState();
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [plans, setPlans] = useState([]);  
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [planname, setPname] = useState('');
    
    
    // Fetch plans from backend
   
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

  


    const handleSubmit = async (event) => {
        event.preventDefault();

        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/member/', {
                name: name,
                phone_no: phone_no,
                dob: dob,
                age: age,
                weight: weight,
                height: height,
                planname:planname, 
               
            });

            if (response.status === 200 || response.status === 201) {
                setSuccess('Details Added');
                if (onSignupSuccess) {
                    onSignupSuccess(); 
                }
                setTimeout(() => {
                    window.location.href = '/'; 
                }, 1000);
            } else {
                setError('An error occurred during process.');
            }
        } catch (error) {
            console.error('Error:', error.response || error);
            setError('An error occurred during process.');
        }
    };

    return (
        <div>
            <div className="container mt-5 ">
                <div className="row justify-content-center"> 
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Membership</h2>
                                <form onSubmit={handleSubmit}>
                                    {/* Other form fields */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input 
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone No</label>
                                        <input 
                                            type="text"
                                            id="phone"
                                            className="form-control"
                                            value={phone_no}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                        <input 
                                            type="date"
                                            id="dob"
                                            className="form-control"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input 
                                            type="number"
                                            id="age"
                                            className="form-control"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="weight" className="form-label">Weight</label>
                                        <input 
                                            type="number"
                                            id="weight"
                                            step="0.1"
                                            className="form-control"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="height" className="form-label">Height</label>
                                        <input 
                                            type="number"
                                            id="height"
                                            step="0.1"
                                            className="form-control"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            required
                                        />
                                    </div>
                                    
                                    {/* Dropdown for Plan Selection */}
                                    <div className="mb-3">
                                        <label htmlFor="plan" className="form-label">Plan</label>
                                        <select 
                                            id="plan"
                                            className="form-select"
                                            onChange={(e) => setPname(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Plan</option>
                                            {plans.map((planOption) => (
                                                <option key={planOption.id} value={planOption.id}>
                                                    {planOption.planname}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    
                                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                    {success && <div className="alert alert-success" role="alert">{success}</div>}
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
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

export default Member;
