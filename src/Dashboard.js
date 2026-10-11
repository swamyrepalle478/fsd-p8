import React, { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h1>Dashboard</h1>
      <p>Click the buttons to update the counter immediately.</p>

      <div className="counter">
        <button onClick={() => setCount((c) => c - 1)}>
          − Decrement
        </button>

        <h2>Count: {count}</h2>

        <button onClick={() => setCount((c) => c + 1)}>
          + Increment
        </button>
      </div>

      <button className="reset-button" onClick={() => setCount(0)}>
        Reset Counter
      </button>
    </section>
  );
}

export default Dashboard;
