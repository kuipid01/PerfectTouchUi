import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";

 
import './login.scss'
function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // User is logged in
        const user = userCredential.user;
        console.log("User is logged in:", user);
        navigate("/dashboard")
      })
      .catch((error) => {
        // Login failed
        const errorMessage = error.message;
        console.error("Login failed:", errorMessage);
      });
  };

  return (
    <form className="form-container " onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log In</button>
     
    </form>
  );
}

export default Login;
