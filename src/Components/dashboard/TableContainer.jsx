import React from "react";

const TableContainer = () => {
  return (
    <div className="py-3 px-3 rounded-3 bg-purple-grad">
      <div className="d-flex align-items-center justify-content-between pb-3">
        <h3 className="fs-24 medium text-black">Meetings</h3>
        <div className="sub-tab nav border-0 gap-2 pb-3 justify-content-end">
          <a
            href="#"
            data-bs-toggle="tab"
            data-bs-target="#meetings_day"
            id="meetings_day-tab"
            className="custom-btn sm-btn active"
          >
            Day
          </a>
          <a
            href="#"
            data-bs-toggle="tab"
            data-bs-target="#meetings_week"
            id="meetings_week-tab"
            className="custom-btn  sm-btn"
          >
            Week
          </a>
          <a
            href="#"
            data-bs-toggle="tab"
            data-bs-target="#meetings_month"
            id="meetings_month-tab"
            className="custom-btn sm-btn"
          >
            Month
          </a>
        </div>
      </div>

      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="meetings_day"
          aria-labelledby="meetings_day-tab"
        >
          <table className="bg-white rounded-10 w-100 default-table">
            <tr>
              <th className="fs-12 bold">Title</th>
              <th className="fs-12 bold">Date & Time</th>
              <th className="fs-12 bold">Status</th>
              <th></th>
              <th className="fs-12 bold">Platform</th>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-green">Completed</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item1">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-green">Completed</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item2">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-red">Cancelled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-blue">Scheduled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>
          </table>
        </div>

        <div
          className="tab-pane fade  "
          id="meetings_week"
          aria-labelledby="meetings_week-tab"
        >
          <table className="bg-white rounded-10 w-100 default-table">
            <tr>
              <th className="fs-12 bold">Title</th>
              <th className="fs-12 bold">Date & Time</th>
              <th className="fs-12 bold">Status</th>
              <th></th>
              <th className="fs-12 bold">Platform</th>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-red">Cancelled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item1">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-red">Cancelled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item2">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-red">Cancelled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-blue">Scheduled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>
          </table>
        </div>

        <div
          className="tab-pane fade  "
          id="meetings_month"
          aria-labelledby="meetings_month-tab"
        >
          <table className="bg-white rounded-10 w-100 default-table">
            <tr>
              <th className="fs-12 bold">Title</th>
              <th className="fs-12 bold">Date & Time</th>
              <th className="fs-12 bold">Status</th>
              <th></th>
              <th className="fs-12 bold">Platform</th>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-blue">Scheduled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item1">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-blue">Scheduled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item2">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-red">Cancelled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>

            <tr>
              <td className="fs-12">BD - CRM</td>
              <td className="fs-12">
                <span>06-04-2023</span>
                <br />
                <span>11:30 AM</span>
              </td>
              <td className="fs-12 text-blue">Scheduled</td>
              <td className="fs-12 text-center pe-3">
                <a href="#" data-bs-toggle="dropdown" id="item3">
                  <i className="fa fa-ellipsis-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu fs-12 dropdown-menu-end"
                  aria-labelledby="item3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action three
                    </a>
                  </li>
                </ul>
              </td>
              <td className="fs-12">In-House at Ashok Mahan</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
