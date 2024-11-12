
import React from "react";
import Footer from "./Footer";
import "../Styles/check.css"; 
import i1 from "../images/yoga.jpg";
import i2 from "../images/personal.jpg";
import i3 from "../images/nut.jpg";
import i4 from "../images/group.jpg";
import i5 from "../images/zumba.jpg";
import i6 from "../images/boxing.jpg";

const programsData = [
  {
    id: 1,
    title: "Yoga Classes",
    description: "Improve your flexibility and mindfulness.",
    image: i1,
  },
  {
    id: 2,
    title: "Personal Training",
    description: "Get one-on-one training tailored to your goals.",
    image: i2,
  },
  {
    id: 3,
    title: "Nutrition Workshops",
    description: "Learn how to eat healthily and fuel your workouts.",
    image: i3,
  },
  {
    id: 4,
    title: "Group Fitness",
    description: "Join our community for fun and energetic classes.",
    image: i4,
  },
  {
    id: 5,
    title: "Zumba Dance",
    description: "Dance your way to fitness with our fun Zumba classes.",
    image: i5,
  },
  {
    id: 6,
    title: "Kickboxing",
    description: "Learn self-defense and improve your fitness with kickboxing.",
    image: i6,
  },
];


const facilitiesData = [
  {
    id: 1,
    title: "Free Wi-Fi",
    description: "Stay connected while working out.",
    icon: "fas fa-wifi",
  },
  {
    id: 2,
    title: "Shower Rooms",
    description: "Clean and comfortable shower facilities.",
    icon: "fas fa-shower",
  },
  {
    id: 3,
    title: "Changing Rooms",
    description: "Spacious changing rooms for your convenience.",
    icon: "fas fa-tshirt",
  },
  {
    id: 4,
    title: "Lockers",
    description: "Secure lockers for storing personal items.",
    icon: "fas fa-lock",
  },
  {
    id: 5,
    title: "Free Parking",
    description: "Convenient parking for all members.",
    icon: "fas fa-parking",
  },
];

const Programs = () => {
  return (
    <div className="programs-page">
      <div className="programs-container">
        <h2 className="programs-title">Our Programs</h2>
        <div className="programs-grid">
          {programsData.map((program) => (
            <div className="program-card" key={program.id}>
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
              />
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="facilities-container">
        <h2 className="facilities-title">Our Facilities</h2>
        <div className="facilities-grid">
          {facilitiesData.map((facility) => (
            <div className="facility-card" key={facility.id}>
              <i className={`facility-icon ${facility.icon}`} />
              <h3 className="facility-title">{facility.title}</h3>
              <p className="facility-description">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Programs;
