import React from "react";

const Categories = () => {
  return (
    <div className="container">
      <div className="nav_area" id="nav_area">
        <ul className="menu">
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="">Alerts</a>
          </li>
          <li>
            <a href="">Leads</a>
          </li>
          <li>
            <a href="">Calendar</a>
          </li>
          <li>
            <a href="">Reports</a>
          </li>
          <li>
            <a href="">Agreement</a>
          </li>
          <li>
            <a href="#">CRM</a>
          </li>
          <li>
            <a href="">Market Intelligence</a>
          </li>
          <li className="menu-item-has-children">
            <a
              href="#"
              id="manage"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Manage
              <span class="arrow">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
            <ul
              className="sub-menu dropdown-menu border-0 p-0 rounded-0"
              onclick="event.stopPropagation()"
              aria-labelledby="manage"
            >
              <li>
                <a href="#">Trigger</a>
              </li>
              <li>
                <a href="#">Stages</a>
              </li>
              <li>
                <a href="#">Tags</a>
              </li>
              <li>
                <a href="#">Email Template</a>
              </li>
              <li>
                <a href="#">Lead Generated Form</a>
              </li>
              <li>
                <a href="#">Document Upload Form</a>
              </li>
              <li>
                <a href="#">New Campaign Form</a>
              </li>
              <li>
                <a href="#">Form____</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
