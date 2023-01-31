import React from 'react'
import styled from 'styled-components'
import '../App.css';
const Section = () => {
  return (
    <Wrap>
      <TextArea >
        <h1>Model - S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextArea>
      <Buttons>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg"></DownArrow>
</Buttons>  
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
max-width:100vw;
height:100vh;
background:url('/images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const TextArea = styled.div`
display:flex;
text-align:center;
flex-direction:column;
padding-top:15vh;
`


const Buttons=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;

`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
display:flex;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin:8px;
cursor:pointer;
`
const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
`