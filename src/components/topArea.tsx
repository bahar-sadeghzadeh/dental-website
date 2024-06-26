import React from "react";

const TopArea: React.FC = () => {
  return (
    <section className="top-area">
      <div className="header-area">
        {/* Start Navigation */}
        <nav
          className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                Dental<span>Website</span>
              </a>
            </div>
            {/* End Header Navigation */}

            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="scroll active">
                  <a href="#home">home</a>
                </li>
                <li className="scroll">
                  <a href="#works">treatment</a>
                </li>
                <li className="scroll">
                  <a href="#reviews">review</a>
                </li>
                <li className="scroll">
                  <a href="#blog">blog</a>
                </li>
                <li className="scroll">
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
        {/* End Navigation */}
      </div>
      {/* /.header-area */}
      <div className="clearfix"></div>
    </section>
  );
};

export default TopArea;
