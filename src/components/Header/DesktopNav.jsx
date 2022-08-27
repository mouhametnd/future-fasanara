import React from 'react'
import styled from 'styled-components'

const DesktopNav = () => {
  return (
    <Wrapper>DesktopNav</Wrapper>
  )
}


const Wrapper = styled.nav`
display: none;
@media screen and (min-width: 768px) {
  display: block;
}
`

export default DesktopNav