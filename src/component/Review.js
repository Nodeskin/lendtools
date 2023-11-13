import React from "react";
import ShouibPic from "../asset/shoaib.jpg";

const Review = () => {
  return (
    <div>
        <section className="content">
      <div className="left-content">
        <img src={ShouibPic} alt="customerImage" className="customer-img" />
        <p className="Shouib-comment">
          Many thanks to Use My Tools for giving me the opportunity to borrow
          the steel Bulldozer. A Perfect solution for us and such a good price
          at only £80 for the day saving us the expenditure of getting a new
          one. I will definitely recommend Use My Tools to my partners
        </p>
        <span style={{ fontSize: "200%", color: "#f1c405" }}>
          &starf; &starf; &starf; &starf;
        </span>
      </div>

      <div className="right-content">
        <h3 className="right-heading">Earn money from your rarely used things</h3>
        <p className="earn-text">
          Earn money from your rarely-used things It's quick, safe and easy to
          share household items and more with the Borrowclub community
        </p>
        <button className="earn-button">See what you can earn</button>
      </div>
      </section>
      
    </div>
  );
};

export default Review;
