import React from "react";

interface Testimonial {
  imgSrc: string;
  name: string;
  location: string;
  comment: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    imgSrc: "assets/images/clients/c1.png",
    name: "Tom Leakar",
    location: "London, UK",
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    stars: 5,
  },
  {
    imgSrc: "assets/images/clients/c2.png",
    name: "Monirul Islam",
    location: "London, UK",
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    stars: 5,
  },
  {
    imgSrc: "assets/images/clients/c3.png",
    name: "Shohrab Hossain",
    location: "London, UK",
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    stars: 5,
  },
  {
    imgSrc: "assets/images/clients/c4.png",
    name: "Tom Leakar",
    location: "London, UK",
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
    stars: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="section-header">
        <h2>Clients Reviews</h2>
        <p>What our clients say about us</p>
      </div>
      <div className="reviews-content">
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="single-testimonial-box" key={index}>
              <div className="testimonial-description">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img src={testimonial.imgSrc} alt="client" />
                  </div>
                  <div className="testimonial-person">
                    <h2>{testimonial.name}</h2>
                    <h4>{testimonial.location}</h4>
                    <div className="testimonial-person-star">
                      {Array.from({ length: testimonial.stars }).map(
                        (_, starIndex) => (
                          <i className="fa fa-star" key={starIndex}></i>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
