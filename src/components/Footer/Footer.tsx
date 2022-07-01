import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaReddit } from 'react-icons/fa'
import styled from 'styled-components'
import { device } from '../../styles/devices'
import { ButtonPrimary, Column, Container, Heading, Lead, Row, Section, Subtitle, TextMuted } from '../../styles/globalStyles'

const Wrapper = styled.div`
  text-align: center !important;
`

const ItemAbout = styled.div`
  flex: 0 0 40.66667%;
  max-width: 40.66667%;
  text-align: left;
  @media ${device.mobileL} {
    flex: 0 0 90%;
    max-width: 90%;
  }
`

const IconWrapper = styled.a`
  margin: 10px;
`

const ItemLegal = styled.div`
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
  text-align: left;
  @media ${device.mobileL} {
    flex: 0 0 28%;
    max-width: 28%;
  }
`

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.25s ease-out;
  display: block;
  margin-top:10px;
`

const StyledTextMuted = styled(TextMuted)`
  font-size: 90%;
  font-weight: 300;
  padding-top: 50px;
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Row justify="space-evenly" wrap='wrap'>
            <ItemAbout>
              <Subtitle>About Knight</Subtitle>
              <TextMuted>Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                    Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.
              </TextMuted>
              <Row justify='flex-start'>
                <IconWrapper>
                  <FaFacebookF />
                </IconWrapper>
                <IconWrapper>
                  <FaInstagram />
                </IconWrapper>
                <IconWrapper>
                  <FaReddit />
                </IconWrapper>
                <IconWrapper>
                  <FaGooglePlusG />
                </IconWrapper>
              </Row>
            </ItemAbout>
            <ItemLegal>
              <Subtitle>Legal</Subtitle>
              <StyledLink>Privacy</StyledLink>
              <StyledLink>Terms</StyledLink>
              <StyledLink>Refund policy</StyledLink>
            </ItemLegal>
            <ItemLegal>
              <Subtitle>Partner</Subtitle>
              <StyledLink>Refer a friend</StyledLink>
              <StyledLink>Affiliates</StyledLink>
            </ItemLegal>
            <ItemLegal>
              <Subtitle>Help</Subtitle>
              <StyledLink>Support</StyledLink>
              <StyledLink>Log in</StyledLink>
            </ItemLegal>
          </Row>
          <Row justify="center">
            <StyledTextMuted>© 2019 Knight - All Rights Reserved</StyledTextMuted>
          </Row>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Footer