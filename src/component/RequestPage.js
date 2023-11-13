import React from "react";
import RequestTable from "./RequestTable";
import RequestInput from "./RequestInput";
import RequestFooter from "./RequestFooter";
import Wrapper from "./Wrapper";


const RequestPage = () => {
  return (
  
      <Wrapper>
      <RequestTable />
      <RequestInput />
      <RequestFooter />
      </Wrapper>    
    
  );
};

export default RequestPage;
