import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="card">
      <h1>Welcome to Home</h1>
      <p>This application demonstrates React Router v6 and screen updates.</p>

      <button onClick={() => navigate("/user/1")}>
        View Sample User
      </button>
    </section>
  );
}

export default Home;
