import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const users = {
  1: {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  2: {
    name: "Alice Smith",
    email: "alice@example.com",
    role: "Developer",
  },
  3: {
    name: "David Kumar",
    email: "david@example.com",
    role: "Student",
  },
};

function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setUser(null);

    const timer = setTimeout(() => {
      setUser(users[userId] || null);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <section className="card">
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading user details...</p>
        </div>
      ) : user ? (
        <div className="user-details">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p className="error">User not found.</p>
      )}
    </section>
  );
}

export default UserProfile;
