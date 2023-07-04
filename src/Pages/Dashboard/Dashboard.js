import React from "react";
import Header from "../../Components/dashboard/Header";
import Categories from "../../Components/dashboard/Categories";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="header page-header">
        <Header />
        <Categories />
      </div>

      <div className="main py-4 dashboard-bg position-relative">
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Dashboard;
