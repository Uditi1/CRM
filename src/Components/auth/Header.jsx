import React from "react";

/// StyleSheet import ///
import '../../Styles/auth.css'

/// Icons Or Images import ///
import CompanyLogo from "../../img/logo.svg";

const Header = () => {
  return (
    <div class="header py-3">
      <div class="container">
        <div class="site-logo">
          <a href="#">
            <img src={CompanyLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
