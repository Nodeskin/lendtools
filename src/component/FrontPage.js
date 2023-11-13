import React from "react";

const FrontPage = () => {
  return (
    <div>
      <section className="first-page">
        <div className="background-image"></div>
        <div className="header-1">
          <h1 className="welcome">Welcome to Use My Tools</h1>
        </div>
        <div className="header-1">
          <h3>Make your idle tools earn you income</h3>
        </div>
        <div className="details">
          <p className="intro">
            Why buy that expensive tool when you can borrow? If you need a tool
            for a one-off job, fancy trying an instrument before spending
            hundreds on a keyboard, or are simply lacking in storage space, Use
            My Tool saves you money by making it easy and safe to hire things
            from your neighbours.
          </p>
        </div>
        <div className="help-butts">
          <a href="signup.html">
            <button className="lend-button">Be a Lender</button>
          </a>
          <a href="#tools-archive">
            <button className="tools-button">Tools</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
