import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header-top" className="header-top">
      <ul>
        <li>
          <div className="header-top-left">
            <ul>
              <li className="select-opt">
                <select name="language" id="language">
                  <option value="default">EN</option>
                  <option value="Hungarian">Hu</option>
                </select>
              </li>
              <li className="select-opt">
                <select name="currency" id="currency">
                  <option value="usd">USD</option>
                  <option value="euro">Euro</option>
                  <option value="bdt">BDT</option>
                </select>
              </li>
              <li className="select-opt">
                <a href="#">
                  <span className="lnr lnr-magnifier"></span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="head-responsive-right pull-right">
          <div className="header-top-right">
            <ul>
              <li className="header-top-contact">+1 000 000 0000</li>
              <li className="header-top-contact">
                <a href="#">sign in</a>
              </li>
              <li className="header-top-contact">
                <a href="#">register</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
