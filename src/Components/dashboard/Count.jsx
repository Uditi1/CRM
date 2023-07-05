import React from "react";
import LeadIcon from "../../img/icon/lead.svg";

import '../../Styles/dashboard.css'

const Count = () => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="dashboard-box box-1">
        <h5 className="medium text-black pb-4">
          <img src={LeadIcon} alt="" />
          Lead Count
        </h5>
        <h2 className="d-flex align-items-end gap-3 pb-2">
          4542
          <span className="value-up">
            <i className="fa fa-arrow-up"></i> 5.0%
          </span>
        </h2>
        <h4 className="fs-12">vs last Month: 4315</h4>
      </div>
    </div>
  );
};

export default Count;
