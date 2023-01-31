import React from 'react'
import { Fade } from 'react-reveal';
import styled from 'styled-components'
import '../App.css';

const Section = (props) => {
  return (
    <Wrap bgImage={props.img}>
      <Fade bottom>
        <TextArea >
          <h1>{props.title}</h1>
          <p>{props.disc}</p>
        </TextArea>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {props.left}
            </LeftButton>
            {
              props.right &&
              <RightButton>
                {props.right}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
max-width:100vw;
height:100vh;
background:${props => `url('/images/${props.bgImage}')`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
scroll-snap-align:start;
scroll-snap-stop:always;
`
const TextArea = styled.div`
display:flex;
text-align:center;
flex-direction:column;
padding-top:15vh;
`


const Buttons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
margin-top:30px;
@media (max-width:768px){
  flex-direction:column;
}

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
background:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
`