// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My LMS</h1>
          <p>
            Empower your learning journey with access to curated courses taught by industry experts.
          </p>
          <Link to="/courses" className="btn">Browse Courses</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Courses taught by professionals with real-world experience.</p>
          </div>
          <div className="feature-card">
            <h3>Self-Paced Learning</h3>
            <p>Learn anytime, anywhere at your convenience.</p>
          </div>
          <div className="feature-card">
            <h3>Certification</h3>
            <p>Earn certificates to showcase your learning and boost your resume.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about container">
        <h2>About This Platform</h2>
        <p>
          This LMS is designed to make learning accessible, affordable, and effective. Whether you’re a student, a professional, or simply curious, you’ll find courses tailored for all skill levels.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My LMS. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
