import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";
import "./App.css";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user/:userId" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
