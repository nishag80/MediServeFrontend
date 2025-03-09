import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components';
import Dashboard from '../views/dashboard/Dashboard';

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <Routes>
            {/* Make sure the default route loads Dashboard */}
            <Route path="/" element={<Dashboard />} />
            {/* Catch all unknown paths inside DefaultLayout */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
