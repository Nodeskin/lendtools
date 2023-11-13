import React from "react";

const SignUpInput = () =>{
    return(
        <div>
             <section className="signup-box">
          <div className="sign-up">
            <div className="signup-header">
              <h3>Create an account to get started</h3>
              <hr style= {{width: "100%", textAlign: "left", marginBottom: "20px"}} />
            </div>
                      {/* First Name */}
            <div className="signup-input">
              <label for="">First Name</label>
              <input type="text" placeholder="FirstName" />
            </div>
                    {/* Last Name */}
            <div className="signup-input">
              <label for="">Last Name</label>
              <input type="text" placeholder="LastName" />
            </div>
                    {/* Email */}
            <div className="signup-input">
              <label for="">Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="signup-input">
              <label for="">Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="signup-input">
              <label for="">Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>
                    {/* Sign-up Button */}
            <div className="signup-button">
              <button>Sign Up</button>
            </div>
            <div className="signup-p">
              <p>Already have an account? <a href="signin.html" style={{textDecoration: "none"}}>Log In</a></p>
            </div>
          </div>
        </section>
        </div>
    )
}

export default SignUpInput;