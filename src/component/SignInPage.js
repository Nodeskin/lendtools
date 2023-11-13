import React from "react";
import SignInInput from "./SignInInput";
import SignInFooter from "./SignInFooter";
import Wrapper from "./Wrapper";

const SignInPage = () =>{
    return(
        <Wrapper>
            <SignInInput/>
            <SignInFooter/>
        </Wrapper>    
    )
}

export default SignInPage;