import React from "react";
/// Imports of Pages ///
import Header from "../../Components/dashboard/Header";
import Categories from "../../Components/dashboard/Categories";

const OrgDashboard = () => {
  return (
    <div className="wrapper">
      <div className="header page-header">
        <Header />
        <Categories />
      </div>
    </div>
  );
};

export default OrgDashboard;
