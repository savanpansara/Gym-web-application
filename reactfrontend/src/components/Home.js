
import React from "react";
import '../Styles/home.css';
import Top from "./Top";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Top />
      <div className="hero">
        <h1>Welcome to Our Gym</h1>
        <p>Your journey to fitness starts here!</p>
        <a href="/member" className="btn-join">Memborship</a>
      </div>

      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>State-of-the-Art Equipment</h3>
            <p>We provide the latest and most efficient fitness equipment for your workouts.</p>
          </div>
          <div className="feature-item">
            <h3>Qualified Trainers</h3>
            <p>Our certified trainers are here to guide you every step of the way.</p>
          </div>
          <div className="feature-item">
            <h3>Diverse Classes</h3>
            <p>Choose from a variety of classes including yoga, pilates, and HIIT.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Hours</h3>
            <p>We offer extended hours to fit your busy schedule.</p>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-item">
          <p>"Joining this gym was the best decision I've made for my health!"</p>
          <h4>- Sarah K.</h4>
        </div>
        <div className="testimonial-item">
          <p>"The trainers are incredibly knowledgeable and supportive!"</p>
          <h4>- Rohn D.</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
