import React, { useEffect, useState } from "react";

function About() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="card">
      <h1>About Page</h1>
      <p>This page demonstrates automatic screen updates using useEffect.</p>

      <h2>Current Time</h2>
      <p className="clock">{time.toLocaleTimeString()}</p>
      <p>Date: {time.toLocaleDateString()}</p>
    </section>
  );
}

export default About;
