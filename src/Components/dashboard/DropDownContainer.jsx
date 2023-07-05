import React from "react";

import Funnel from "../../img/bd-funnel.png";

import "../../Styles/dashboard.css";

const DropDownContainer = () => {
  return (
    <div className="col-md-6">
      <div className="dashboard-acco">
        <div></div>
        <a
          className="dash-acco-title d-flex justify-content-between align-items-center rounded-3 px-3 py-2 bg-pink text-black medium mb-2"
          data-bs-toggle="collapse"
          href="#bd_funnel"
          aria-expanded="false"
        >
          BD Funnel
          <i className="fa fa-chevron-down"></i>
        </a>
        <div
          className="py-3 px-3 rounded-3 bg-pink-grad collapse multi-collapse"
          id="bd_funnel"
        >
          <div className="d-flex align-items-center justify-content-between pb-3">
            <h3 className="fs-24 medium text-black">BD Funnel</h3>
            <div className="main-tab nav border-0 gap-2">
              <a
                href="#"
                data-bs-toggle="tab"
                data-bs-target="#bd_proposal"
                id="bd_proposal-tab"
                class="custom-btn sm-btn active"
              >
                Proposal
              </a>
              <a
                href="#"
                data-bs-toggle="tab"
                data-bs-target="#bd_bid"
                id="bd_bid-tab"
                class="custom-btn sm-btn"
              >
                Bid
              </a>
            </div>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="bd_proposal"
              aria-labelledby="bd_proposal-tab"
            >
              <div class="sub-tab nav border-0 gap-2 pb-3 justify-content-end">
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#proposal_day"
                  id="proposal_day-tab"
                  class="custom-btn sm-btn active"
                >
                  Day
                </a>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#proposal_week"
                  id="proposal_week-tab"
                  class="custom-btn  sm-btn"
                >
                  Week
                </a>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#proposal_month"
                  id="proposal_month-tab"
                  className="custom-btn sm-btn"
                >
                  Month
                </a>
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="proposal_day"
                  aria-labelledby="proposal_day-tab"
                >
                  <img src={Funnel} alt="" />
                </div>

                <div
                  class="tab-pane fade  "
                  id="proposal_week"
                  aria-labelledby="proposal_week-tab"
                >
                  <img src={Funnel} alt="" />
                </div>

                <div
                  class="tab-pane fade  "
                  id="proposal_month"
                  aria-labelledby="proposal_month-tab"
                >
                  <img src={Funnel} alt="" />
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="bd_bid" aria-labelledby="bd_bid-tab">
              <div class="sub-tab nav border-0 gap-2 pb-3 justify-content-end">
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#bid_day"
                  id="bid_day-tab"
                  class="custom-btn sm-btn active"
                >
                  Day
                </a>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#bid_week"
                  id="bid_week-tab"
                  class="custom-btn  sm-btn"
                >
                  Week
                </a>
                <a
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#bid_month"
                  id="bid_month-tab"
                  class="custom-btn sm-btn"
                >
                  Month
                </a>
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="bid_day"
                  aria-labelledby="bid_day-tab"
                >
                  <img src={Funnel} alt="" />
                </div>

                <div
                  class="tab-pane fade  "
                  id="bid_week"
                  aria-labelledby="bid_week-tab"
                >
                  <img src={Funnel} alt="" />
                </div>

                <div
                  class="tab-pane fade  "
                  id="bid_month"
                  aria-labelledby="bid_month-tab"
                >
                  <img src={Funnel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownContainer;
