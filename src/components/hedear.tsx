import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header-top" className="header-top">
      <div className="header-top-right" style={{}}>
        <ul>
          <li className="select-opt">
            <select name="language" id="language">
              <option value="default">EN</option>
              <option value="Hungarian">HU</option>
            </select>
          </li>
          <li className="select-opt">
            <a href="#">
              <span className="lnr lnr-magnifier"></span>
            </a>
          </li>
          <li className="header-top-contact">+1 000 000 0000</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
