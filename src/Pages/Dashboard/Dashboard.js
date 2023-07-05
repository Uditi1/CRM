import React from "react";

/// Imports of Pages ///
import Header from "../../Components/dashboard/Header";
import Categories from "../../Components/dashboard/Categories";
import CountRow from "../../Components/dashboard/CountRow";
import TableContainer from "../../Components/dashboard/TableContainer";
import DropDownContainer from "../../Components/dashboard/DropDownContainer";

import EditIcon from "../../img/icon/edit.svg";
import PlusIcon from "../../img/icon/plus.svg";

/// StyleSheet import ///
import "../../Styles/auth.css";
import "../../Styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="header page-header">
        <Header />
        <Categories />
      </div>
  {/* <Route path="/org-dashboard" element={} /> */}
      <div className="main py-4 dashboard-bg position-relative">
        <div className="container">
          <div className="row pb-4">
            <div className="col-sm-6 pb-sm-0 pb-3">
              <a href="#" className="custom-btn sm-btn bg-white text-sky ">
                My Dashboard
              </a>
              <span className="text-black2 fs-12 medium ps-3">
                Organisation Dashboard
              </span>
            </div>

            <div className="col-sm-6 text-sm-end">
              <a href="#" className="custom-btn medium sm-btn">
                <img src={PlusIcon} class="me-2" />
                Add Widget
              </a>
              <a
                href="#"
                className="custom-btn medium border-bl-btn sm-btn bg-white"
              >
                <img src={EditIcon} class="me-2" />
                Edit Widget
              </a>
            </div>
          </div>

          <CountRow />

          <div className="row pt-3">
            <div className="col-md-6 pb-md-0 pb-4">
              <TableContainer />
            </div>
             <DropDownContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
