import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
   <Container>
    <Logo src="/images/logo.svg"></Logo>
    <Menu>
      <p><a href="#">Model S</a></p>
      <p><a href="#">Model 3</a></p>
      <p><a href="#">Model X</a></p>
      <p><a href="#">Model Y</a></p>
    </Menu>
   </Container>
  )
}

export default Header


const Container=styled.div`
min-height:60px;
top:0;
left:0;
right:0;
display:flex;
align-items:center;
position:fixed;
padding:0 20px;
`
const Logo=styled.img`

`

const Menu=styled.div`
display:flex;
align-item:center;
justify-content:center;
flex:1;
p{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}

`