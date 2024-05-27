import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const totalSaleAmt = location.state?.totalSaleAmt;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Total Sales Amount: {totalSaleAmt}</p>
    </div>
  );
}

export default Dashboard;
