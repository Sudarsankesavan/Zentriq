import React, { useState } from "react";
import "../index.css";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); 
  const [message, setMessage] = useState({ type: "", text: "" });

  const toggleForms = () => {
    setIsLoginForm(!isLoginForm);
    setMessage({ type: "", text: "" });
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username || !password) {
      setMessage({ type: "error", text: "Please enter your username and password." });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.message === "Login successful") {
        setMessage({ type: "success", text: `Login successful! Welcome, ${username}!` });
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
      } else {
        setMessage({ type: "error", text: `Login failed: ${data.message}` });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", text: "An error occurred. Please try again later." });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = registerData;

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match. Please try again." });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();

      if (data.message === "User registered successfully") {
        setMessage({ type: "success", text: "Registered successfully!" });
        setIsLoginForm(true);
      } else {
        setMessage({ type: "error", text: `Registration failed: ${data.message}` });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", text: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="container">
      {isLoginForm ? (
        <div className="form-container active">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="login-username"> Username<span className="star"> *</span></label>
              <input type="text" id="login-username" name="username" value={loginData.username}
                onChange={(e) => handleInputChange(e, "login")} required />
            </div>
            <div className="input-group">
              <label htmlFor="login-password"> Password<span className="star"> *</span>
              </label>
              <input type="password" id="login-password" name="password" value={loginData.password}
                onChange={(e) => handleInputChange(e, "login")} required/>
            </div>
            <button type="submit">Login</button>
            <p className="message"> Don't have an account? <a href="#" onClick={toggleForms}>sign-up</a> </p>
          </form>
        </div>
      ) : (
        <div className="form-container active">
          <form onSubmit={handleRegister}>
            <h2>Sign-up</h2>
            <div className="input-group">
              <label htmlFor="register-username">Username<span className="star"> *</span></label>
              <input type="text" id="register-username" name="username" value={registerData.username}
                onChange={(e) => handleInputChange(e, "register")} required/>
            </div>
            <div className="input-group">
              <label htmlFor="register-email"> Email<span className="star"> *</span></label>
              <input type="email" id="register-email" name="email" value={registerData.email}
                onChange={(e) => handleInputChange(e, "register")} required/>
            </div>
            <div className="input-group">
              <label htmlFor="register-password"> Password<span className="star"> *</span> </label>
              <input type="password" id="register-password" name="password" value={registerData.password}
                onChange={(e) => handleInputChange(e, "register")}required/>
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password<span className="star"> *</span></label>
              <input type="password" id="confirm-password" name="confirmPassword" value={registerData.confirmPassword}
                onChange={(e) => handleInputChange(e, "register")}required/>
            </div>
            <button type="submit">Register</button>
            <p className="message">Already have an account? <a href="#" onClick={toggleForms}>log-in</a></p>
          </form>
        </div>
      )}

      {message.text && (
        <div
          className={
            message.type === "success" ? "success-message" : "error-message"
          }>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default App;
