import React from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/devices'
import { ButtonPrimary, Column, Container, Heading, Lead, Row, Section, Subtitle, TextMuted } from '../../styles/globalStyles'
import image1 from '../../assets/img/blog-1.jpg'
import image2 from '../../assets/img/blog-2.jpg'
import image3 from '../../assets/img/blog-3.jpg'


const StyledSection = styled(Section)`
  margin-top:100px;
  position:relative;
  width:100%;
  background:#11171a;
  ::after {
    content:'';
    position:absolute;
    top:-49px;
    width:0;
    height:0;
    border-bottom: 50px solid #11171a; 
    border-right: 100vw solid transparent;
  }
  ::before {
    content:'';
    position:absolute;
    bottom:-50px;
    width:0;
    height:0;
    border-top: 51px solid #11171a; 
    border-right: 100vw solid transparent;
  }
`

const Wrapper = styled.div`
  text-align: center !important;
`

const Item = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #263238;
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.3rem;
  @media ${device.mobileL} {
    flex: 0 0 90%;
    max-width: 90%;
  }
`

const StyledLink = styled.a`
  color: #1de9b6;
  text-decoration: none;
  background-color: transparent;
`

const Image = styled.img`
  width: 100%;
  border-top-left-radius: calc(0.3rem - 0px);
  border-top-right-radius: calc(0.3rem - 0px);
`

const ItemBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  text-align: left;
`

const ButtonWrapper = styled.div`
  margin: 70px;
`

const Blog = () => {
  return (
    <StyledSection>
      <Container>
        <Wrapper>
          <Column>
            <Heading>News from Knight.</Heading>
            <TextMuted>What's new at Knight.</TextMuted>
          </Column>
          <Row justify='space-evenly' wrap='wrap'>
            <Item>
              <StyledLink>
                <Image src={image1} />
              </StyledLink>
              <ItemBody>
                <Subtitle>We launch new iOS & Android mobile apps</Subtitle>
                <TextMuted>Sep 27, 2018</TextMuted>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. 
                </p>
              </ItemBody>
            </Item>
            <Item>
              <StyledLink>
                <Image src={image2} />
              </StyledLink>
              <ItemBody>
                <Subtitle>We launch new iOS & Android mobile apps</Subtitle>
                <TextMuted>Sep 27, 2018</TextMuted>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. 
                </p>
              </ItemBody>
            </Item>
            <Item>
              <StyledLink>
                <Image src={image3} />
              </StyledLink>
              <ItemBody>
                <Subtitle>We launch new iOS & Android mobile apps</Subtitle>
                <TextMuted>Sep 27, 2018</TextMuted>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. 
                </p>
              </ItemBody>
            </Item>
          </Row>
          <Row justify='center'>
            <ButtonWrapper>
              <ButtonPrimary>VIEW ALL POSTS</ButtonPrimary>
            </ButtonWrapper>
          </Row>
        </Wrapper>
      </Container>
    </StyledSection>
  )
}

export default Blog