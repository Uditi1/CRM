import React from "react";
import CompanyLogo from "../../img/logo-white.svg";
import CheckInIcon from "../../img/icon/check-in.svg";
import SearchIcon from "../../img/icon/search.svg";
import NotificationIcon from "../../img/icon/notification.svg";
import Profile from "../../img/profile.png";
import InnerProfile from "../../img/inner-profile.png";
import PhoneIcon from "../../img/icon/profile-phone.svg";
import PhoneEmail from "../../img/icon/profile-email.svg";
import Target from "../../img/target.png";

/// StyleSheet import ///
import "../../Styles/auth.css";

const Header = () => {
  return (
    <div className="top-header py-3">
      <div className="container py-1">
        <div className="row">
          <div className="col-lg-6 ">
            <a
              href="#"
              className="site-logo pe-lg-4 pe-md-3 pe-2 d-inline-block border-end"
            >
              <img src={CompanyLogo} alt="" />
            </a>

            <a
              href="#"
              className="toggle"
              data-bs-toggle="collapse"
              data-bs-target="#nav_area"
            >
              <i className="fa fa-bars"></i>
            </a>

            <a
              href="#"
              className="custom-btn fs-14 medium py-1 mx-3 checkin-btn"
            >
              Check-in <img src={CheckInIcon} className="ps-1" alt="" />
            </a>
            <span className="text-white medium fs-14 head-time">
              00:20:20 Hrs
            </span>

            <span className="theme-mode">
              <input type="checkbox" id="darkSwitch" className="d-none" />
              <label
                for="darkSwitch"
                className="d-flex align-items-center justify-content-between"
              >
                <i className="fas fa-moon"></i>
                <i className="fa fa-sun"></i>
              </label>
            </span>
          </div>

          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-md-end justify-content-between">
              <div className="site-search">
                <form
                  action=""
                  className="header-search d-flex flex-row-reverse align-items-center justify-content-end w-100"
                >
                  <input
                    type="text"
                    placeholder="Search for people and groups "
                    name="search"
                    className="border-0 bg-transparent fs-12 medium"
                  />
                  <button type="submit" className="bg-transparent border-0 ps-0">
                    <img src={SearchIcon} alt="" />
                  </button>
                </form>
              </div>

              <div className="px-lg-4 px-2 mx-lg-4 mx-2 border-start border-end">
                <a href="#">
                  <img src={NotificationIcon} alt="" />
                </a>
              </div>

              <a
                href="#"
                className="d-flex align-items-center gap-2"
                data-bs-toggle="collapse"
                data-bs-target="#profile"
                aria-expanded="false"
              >
                <img
                  src={Profile}
                  alt=""
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <div>
                  <span className="fs-14 medium ps-2 text-white d-none d-xl-block">
                    Charles Deora
                  </span>
                  <span className="fs-12 light ps-2 text-white d-none d-xl-block">
                    BD Manager
                  </span>
                </div>
              </a>

              <div
                className="profile-dropdown collapse py-4 rounded-10 border-0"
                onclick="event.stopPropagation()"
                id="profile"
                style={{}}
              >
                <div className="d-flex align-items-center justify-content-between pb-4 px-4">
                  <h6 className="fs-20 medium">My Profile</h6>
                  <a
                    href="#"
                    className="custom-btn bg-red rounded-10 fs-12 medium border-0 py-2"
                  >
                    Sign Out
                  </a>
                </div>
                <div className="d-flex align-items-center gap-4 pb-4 px-4">
                  <img
                    src={InnerProfile}
                    className="rounded-circle"
                    width="110"
                    height="110"
                    alt=""
                  />
                  <div className="user-info">
                    <h4 className="pb-2">Charles Deora</h4>
                    <h5 className="fs-12 pb-1">BD Manager</h5>
                    <h5 className="fs-12 pb-1">Team - BD</h5>
                    <a href="tel:9859684785" className="d-block fs-12 pb-1">
                      <img
                        src={PhoneIcon}
                        className="me-2"
                        width="10"
                        height="10"
                        alt=""
                      />{" "}
                      9859684785
                    </a>
                    <a
                      href="mailto:sorabh@posterity.in"
                      className="d-block fs-12"
                    >
                      <img
                        src={PhoneEmail}
                        className="me-2"
                        width="10"
                        height="10"
                        alt=""
                      />{" "}
                      sorabh@posterity.in
                    </a>
                  </div>
                </div>
                <div className="">
                  <a
                    href="#"
                    className="collapse-butn medium p-4 d-block"
                    data-bs-toggle="collapse"
                    data-bs-target="#targets"
                  >
                    Targets
                  </a>
                  <div className="collapse open-collapse" id="targets">
                    <div className="bg-sky py-3 px-4 d-flex align-items-center gap-3">
                      <img src={Target} width="52" height="52" alt="" />
                      <h4 className="semibold text-white fs-20">Targets</h4>
                    </div>
                    <form action="" className=" px-4 py-3">
                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Accepted Leads Generated
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Proposal Submission
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Meeting/E-meeting Organised
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Pilot Assignment Received
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Onboarding & Agreeement & Renewal
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="d-flex border-0 butn-group gap-3 pt-2">
                        <button
                          type="button"
                          className="custom-btn border-0 py-2 rounded-4 raleway medium"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="custom-btn close-modal py-2 rounded-4 bg-white border-bl-btn px-4 raleway semibold"
                          data-bs-toggle="collapse"
                          data-bs-target="#targets"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="">
                  <a
                    href="#"
                    className="collapse-butn medium p-4 d-block"
                    data-bs-toggle="collapse"
                    data-bs-target="#setting"
                  >
                    Account Settings
                  </a>
                  <div className="collapse open-collapse" id="setting">
                    <div className="bg-sky py-3 px-4 d-flex align-items-center gap-3">
                      <img src={Target} width="52" height="52" alt="" />
                      <h4 className="semibold text-white fs-20">
                        Account Settings
                      </h4>
                    </div>
                    <form action="" className=" px-4 py-3">
                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Full Name
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Mobile Number
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          E-Mail
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Designation
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Role
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Team
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="d-flex border-0 butn-group gap-3 pt-2">
                        <button
                          type="button"
                          className="custom-btn border-0 py-2 rounded-4 raleway medium"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="custom-btn close-modal py-2 rounded-4 bg-white border-bl-btn px-4 raleway semibold"
                          data-bs-toggle="collapse"
                          data-bs-target="#setting"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="">
                  <a
                    href="#"
                    className="collapse-butn medium p-4 d-block"
                    data-bs-toggle="collapse"
                    data-bs-target="#security"
                  >
                    Security
                  </a>
                  <div className="collapse open-collapse" id="security">
                    <div className="bg-sky py-3 px-4 d-flex align-items-center gap-3">
                      <img src={Target} width="52" height="52" alt="" />
                      <h4 className="semibold text-white fs-20">Security</h4>
                    </div>
                    <form action="" className=" px-4 py-3">
                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Current Password
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          New Password
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="pb-3">
                        <label for="" className="d-block medium fs-14 pb-2">
                          Confirm Password
                        </label>
                        <input type="text" className="form-field" placeholder="" />
                      </div>

                      <div className="d-flex border-0 butn-group gap-3 pt-2">
                        <button
                          type="button"
                          className="custom-btn border-0 py-2 rounded-4 raleway medium"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="custom-btn close-modal py-2 rounded-4 bg-white border-bl-btn px-4 raleway semibold"
                          data-bs-toggle="collapse"
                          data-bs-target="#security"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
