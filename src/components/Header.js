import { Close } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
const [NavMenu, setNavMenu] = useState(false);
return(
   <Container>
    <Logo src="/images/logo.svg"></Logo>
    <Menu>
      <a href="#">Model S</a>
      <a href="#">Model 3</a>
      <a href="#">Model X</a>
      <a href="#">Model Y</a>
    </Menu>
    <RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla</a>
      <a href="#">Account</a>
      <Hamburg src="/images/menu.png" onClick={()=>Menu?setNavMenu(true):setNavMenu(false)}></Hamburg>
    </RightMenu>
    
    <BurgerNav show={NavMenu}  onClick={()=>!Menu?setNavMenu(true):setNavMenu(false)}>
      <CustomClose></CustomClose>
      <li><a href='#'>Existing Inventory</a></li>
      <li><a href='#'>Used Inventory</a></li>
      <li><a href='#'>Trade-In</a></li>
      <li><a href='#'>Demo Drive</a></li>
      <li><a href='#'>Insurance</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Insurance</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Insurance</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Insurance</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      
    </BurgerNav>
    
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
justify-content:space-between;
z-index:10;
`
const Logo=styled.img`

`

const Menu=styled.div`
display:flex;
align-item:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}
@media(max-width:768px){
  display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-item:center;
padding:10px 0;
justify-content:center;
a{
  display:flex;
  font-weight:500;
  font-size:15px;
  padding:10px;
  margin:auto auto;
  text-transform:uppercase;
  flex-wrap:nowrap;
}


`

const Hamburg=styled.img`
height:35px;
padding:4px;
width:30px;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:300px;
z-index:10000;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
width:100%;
padding:20px;
  border-bottom: 1px solid rgba(0,0,0,0.2);

a{
  font-weight:600;
}

}


`

const CustomClose=styled(Close)`
float:right;
display:flex;
position:absolute;
right:10px;
top:10px;

`