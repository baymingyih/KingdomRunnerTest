import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ isLogin = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate authentication
      // Replace this with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // If auth is successful, store user info and redirect
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
      // Handle auth failure (show error message, etc.)
    }
  };

  return (
    <div className="auth-page" style={styles.container}>
      <h2 style={styles.heading}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

// Basic styles for the page
const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
    display: "block",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1a73e8",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default AuthPage;
