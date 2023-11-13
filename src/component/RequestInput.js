import React from "react";

const RequestInput = () =>{
        return(
            <div>
                <section className="new-request">
          <div className="newRequest-input">
            <h2 className="request-h2">Make New Request</h2>
                    {/* Tools to Borrow */}
            <div className="new-input">
              <label className="borrow-label">Tool to borrow: </label>
              <input type="text" placeholder="Tool" className="input-box" />
            </div>
                    {/* Location */}
            <div className="new-input">
              <label className="location-label" >Location:</label>
              <input
                type="text"
                placeholder="Your Location"
                className="input-box"
              />
            </div>
                    {/* No of Days */}
            <div className="new-input">
              <label className="days-label">Number of Days:</label>
              <select name="role" className="input-box">
                <option>--Select--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            {/* Date Needed */}
            <div className="new-input">
              <label className="date-label">Date Needed:</label>
              <input type="date" className="input-box" />
            </div>

            <p id="newRequest-p">
              By clicking submit request, you agree to have read and consent to
              your data being stored in line with the guidelines set out in the
              Privacy Policy.
            </p>

            <div className="request-button">
              <button id="submit-but">Submit Request</button>
            </div>
          </div>
        </section>

            </div>
        )
}

export default RequestInput