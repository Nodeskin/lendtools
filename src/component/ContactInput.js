import React from "react";

const ContactInput = () =>{
    return(
        <div>
            <section className="contact-container">
            <section className="contact-us">
          <div className="contact-header">
            <h4 className="contactUs-h4">Contact Us</h4>
            <p className="contactUs-p">Drop a message, and get reply within 24 hours!</p>
          </div>
                    {/* NAME */}
            <div className="info">
              <input type="text" placeholder="Your name" id="" />
            </div>
                    {/* EMAIL */}
            <div className="info">
              <input type="email" placeholder="Your Email Address" id="" />
            </div>
                     {/* PHONE-NUMBER */}
            <div className="info">
              <input type="tel" placeholder="Your Phone Number" id="" />
            </div>
                     {/* MESSAGE-HERE */}
            <div className="info">
              <textarea
                placeholder="Type your Message Here..."
                id="contact-msg"
              ></textarea>
            </div>
            <div className="info">
              <button className="submit">Submit</button>
            </div>
          </section>
          </section>
        </div>
    )
}

export default ContactInput;