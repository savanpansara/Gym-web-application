import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer1 mt-4 bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ml-10">
              <h3 className="text-xl font-bold">Opening Hours</h3>
              <p className="mt-2">Monday-Saturday:<br></br>
                  6:00 AM - 12:00 PM<br></br>
                  3:00 PM - 10:00 PM<br></br>
                  Sunday: 6:00 AM - 10:00 AM
              </p>
              
            </div>

            <div className="col-md-4 ml-10">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="mt-2">Ahmedabad</p>
              <p>Phone: +91 7574970964</p>
              <p>Email: info@goldenfitness.com</p>
            </div>

            <div className="col-md-4">
              <h3 className="text-xl font-bold">Social Media</h3>
              <ul className="list-unstyled d-flex mt-4">
                <li>
                  <a href="https://www.facebook.com/" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white me-2" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white me-2" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="d-flex align-items-center justify-content-center rounded-circle bg-black text-white" style={{ width: '48px', height: '48px' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Golden fitness. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
