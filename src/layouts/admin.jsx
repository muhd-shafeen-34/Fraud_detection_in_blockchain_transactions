import React from "react";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";

// components
import Adminnavbar from '../components/adminnavbar';
import Sidebar from '../components/adminsidebar';
import Header from '../components/adminheader';

// views
import Admindashboard from '../pages/admin/admindashboard';


export default function User() {
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