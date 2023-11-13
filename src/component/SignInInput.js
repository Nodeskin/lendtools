import React from "react";
import { NavLink } from "react-router-dom"

const SignInInput = () =>{
        return(
            <div>

                <section className="signin-container">
        <div className="signin-info">
            <h3>Please enter your credentials to log in</h3>
                    {/* Email */}
            <div className="signin-input">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="you@example.com"/>
            </div>
                    {/* Password */}
            <div className="signin-input">
                <label htmlFor="password" id="">Password</label>
                <input type="password" placeholder="Enter password"/>
            </div>

            <div className="signin-clicks"><button>Login</button>
        <a href="" style={{textDecoration: "none", color: "green"}}>
            <p>Forget Password?</p>
        </a>
        <p>Don't have an account yet? 
            <NavLink to= "/SignUp" style={{textDecoration: "none", color: "green"}}> Sign Up </NavLink>
        </p>
        </div> 
        </div>
    </section>

            </div>
        )
}

export default SignInInput;