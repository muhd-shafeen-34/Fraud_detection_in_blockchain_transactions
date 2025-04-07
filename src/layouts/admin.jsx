import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

// components
import Adminnavbar from "../components/adminnavbar";
import Sidebar from "../components/adminsidebar";
import Header from "../components/adminheader";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in as admin
    const isAdmin = localStorage.getItem("isAdmin");
    const userId = localStorage.getItem("userId");

    // If not admin, redirect to login
    if (!userId || isAdmin !== "true") {
      navigate("/auth/login");
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, [navigate]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // If not authenticated, don't render anything (redirect handled by useEffect)
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Render admin layout if authenticated
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Adminnavbar />
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {/* This is where nested routes will render */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
