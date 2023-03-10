
import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
// import { Fade } from 'react-reveal';
export const Home = () => {
  return (
    <Container>
      <Header></Header>
      <Fade bottom>
      <Section
        title="Model-3"
        disc="Leasing starting at $399/mo"
        img="model-s.jpg"
        left="Coustom order"
        right="Existing Inventory"
      ></Section>
</Fade>
<Fade bottom>
      <Section
        title="Model-Y"
        disc="Order Online Touchless Delivery"
        img="model-y.jpg"
        left="Coustom order"
        right="Existing Inventory"
      ></Section>
</Fade>
<Fade bottom>

      <Section
        title="Model-X"
        disc="Order Online Touchless Delivery"
        img="model-3.jpg"
        left="Coustom order"
        right="Existing Inventory"
      ></Section>
      </Fade>
      <Fade bottom>
      <Section
        title="Model-X"
        disc="Order Online Touchless Delivery"
        img="model-x.jpg"
        left="Coustom order"
        right="Existing Inventory"
      ></Section>
      </Fade>
      <Fade bottom>
      <Section
        title="Lowest Cost Solar Panel in America"
        disc="Money-back guarantee"
        img="solar-panel.jpg"
        left="Order now"
        right="Learn more"
      ></Section>
      </Fade>
      <Fade bottom>
      <Section
        title="Solar for New Roofs"
        disc="Solar Roof Costs Less Than a New Roof"
        img="solar-roof.jpg"
        left="Order now"
        right="Learn more"
      ></Section>
           </Fade>
        <Fade bottom>
      <Section
        title="Accessories"
        disc=""
        img="accessories.jpg"
        left="Order now"
      
      ></Section>
           </Fade>
    </Container>
  )
}

const Container = styled.div`
max-height:100vh;
max-width:100vw;


`
const Fade=styled.div`
height:100vh;
backgound-size:cover;
background-repeat:no-repeat;
scroll-snap-align:start;
scroll-snap-stop:always;
`