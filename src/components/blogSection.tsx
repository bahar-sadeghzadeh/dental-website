import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>news and articles</h2>
          <p>Always up to date with our latest News and Articles</p>
        </div>
        <div className="blog-content">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="single-blog-item">
                <div className="single-blog-item-img">
                  {/* <img src="./assets/images/blog/b1.jpg" alt="blog image" /> */}
                </div>
                <div className="single-blog-item-txt">
                  <h2>
                    <a href="#">How to find your Desired Place more quickly</a>
                  </h2>
                  <h4>
                    posted <span>by</span> <a href="#">admin</a> march 2018
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog-item">
                <div className="single-blog-item-img">
                  {/* <img src="assets/images/blog/b2.jpg" alt="blog image" /> */}
                </div>
                <div className="single-blog-item-txt">
                  <h2>
                    <a href="#">How to find your Desired Place more quickly</a>
                  </h2>
                  <h4>
                    posted <span>by</span> <a href="#">admin</a> march 2018
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog-item">
                <div className="single-blog-item-img">
                  {/* <img src="assets/images/blog/b3.jpg" alt="blog image" /> */}
                </div>
                <div className="single-blog-item-txt">
                  <h2>
                    <a href="#">How to find your Desired Place more quickly</a>
                  </h2>
                  <h4>
                    posted <span>by</span> <a href="#">admin</a> march 2018
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
