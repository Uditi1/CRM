import React from "react";

/// StyleSheet import ///
import '../../Styles/auth.css'

/// Icons Or Images import ///
import CompanyLogo from "../../img/logo.svg";

const Header = () => {
  return (
    <div className="header py-3">
      <div className="container">
        <div className="site-logo">
          <a href="#">
            <img src={CompanyLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
