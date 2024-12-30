// import React from 'react'
import './main.css'
const Footer = () => {
  return (
    <footer className="contact-footer">
    <div className="contact-block">
      <h2 className="contact-heading">Contact Info</h2>
      <p className="contact-description">
        If you have any questions or need assistance, feel free to reach out
        to us.
      </p>
      <p className="contact-phone">
        <strong>Phone:</strong> 📞 <a href="tel:+919629565554">9629565554</a>
      </p>
      <p className="contact-email">
        <strong>Email:</strong> ✉️
        <a className="contact-link" href="mailto:premnath3182000@gmail.com">
        premnath3182000@gmail.com
        </a>
      </p>
      <p className="contact-address">
        <strong>Address:</strong> 🏠 1/127 Pudhur street Vembarpatty, Dimdigul - 624308.
      </p>
    </div>

    <div className="contact-block">
      <h2 className="contact-heading">Follow Us</h2>
      <p className="contact-follow">
        <a
          className="contact-link"
          // href="https://www.linkedin.com/in/premnath-m/"
        >+
          LinkedIn
        </a>
      </p>
    </div>

    <div className="contact-block">
      <h2 className="contact-heading">Business Hours</h2>
      <p className="business-hours">Mon-Fri: 9 AM - 5 PM</p>
      <p className="business-hours">Sat-Sun: Closed</p>
    </div>
  </footer>
  )
}

export default Footer