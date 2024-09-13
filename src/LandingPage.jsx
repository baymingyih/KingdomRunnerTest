import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const LandingPage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#1a73e8" }}>Kingdom Runners</h1>
        <nav>
          <a
            href="#features"
            style={{
              marginRight: "20px",
              color: "#333",
              textDecoration: "none",
            }}
          >
            Features
          </a>
          <a
            href="#about"
            style={{
              marginRight: "20px",
              color: "#333",
              textDecoration: "none",
            }}
          >
            About
          </a>
          {/* Updated Sign Up button */}
          <Link
            to="/signup" // this will navigate to the signup/login page
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main>
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Run for His Kingdom, Connect in Faith
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Join a community of Kingdom-minded runners, share your journey, and
            grow in faith together.
          </p>
          <Link
            to="/signup" // Get Started button now also links to signup page
            style={{
              backgroundColor: "#34a853",
              color: "white",
              padding: "15px 30px",
              borderRadius: "25px",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Get Started
          </Link>
        </section>

        <section
          id="features"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Track Your Runs
            </h3>
            <p>
              Connect with Strava to automatically log and share your runs with
              the Kingdom community.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Build Community
            </h3>
            <p>
              Connect with other Kingdom runners, share experiences, and
              encourage one another in faith and fitness.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Prayer Campaigns
            </h3>
            <p>
              Join or create prayer campaigns to unite runners in
              Kingdom-focused initiatives.
            </p>
          </div>
        </section>

        <section
          id="about"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
            About Kingdom Runners
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Kingdom Runners is more than just a running app - it's a platform
            that combines the joy of running with the power of faith. We believe
            that every step can be a prayer, every mile an opportunity for
            reflection, and every run a chance to connect with God and fellow
            believers.
          </p>
          <p>
            Whether you're training for a marathon or just starting your running
            journey, Kingdom Runners provides the tools and community to support
            your physical and spiritual growth as you run for His Kingdom.
          </p>
        </section>
      </main>

      <footer style={{ marginTop: "60px", textAlign: "center", color: "#666" }}>
        <p>&copy; 2024 Kingdom Runners. All rights reserved.</p>
        <div style={{ marginTop: "20px" }}>
          <a
            href="#"
            style={{
              color: "#666",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              color: "#666",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Terms of Service
          </a>
          <a href="#" style={{ color: "#666", textDecoration: "none" }}>
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
