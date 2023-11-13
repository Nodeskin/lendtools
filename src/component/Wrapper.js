import React from 'react'
import Nav from './Nav'

const Wrapper = ({children}) => {
  return (
    <>
      <Nav/>
      {children}
    </>
  )
}

export default Wrapper
