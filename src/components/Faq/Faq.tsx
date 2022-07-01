import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/devices'
import { ButtonPrimary, Column, Container, Heading, Lead, Row, Section, Subtitle } from '../../styles/globalStyles'


const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const StyledLead = styled(Lead)`
  color: #78909C
`

const RowWrapper = styled.div`
  margin:  auto;
  margin-top: 30px;
  margin-bottom: 30px;
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
  @media ${device.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const Item = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
  margin: 10px;
  @media ${device.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const StyledText = styled.p`
  color: #78909C;
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  margin: 30px;
`

const Faq = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Column align='center'>
            <Heading>Frequently asked questions</Heading>
            <StyledLead>Answers to most common questions.</StyledLead>
          </Column>
          <RowWrapper>
            <Row wrap="wrap" justify="space-evenly">
              <Item>
                <h6>Can I try it for free?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
              <Item>
                <h6>Can I try it for free?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
              <Item>
                <h6>What are the payment methods you accept?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
              <Item>
                <h6>What are the payment methods you accept?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
              <Item>
                <h6>What are the payment methods you accept?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
              <Item>
                <h6>What are the payment methods you accept?</h6>
                <StyledText>Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</StyledText>
              </Item>
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row justify='center'>
              <Subtitle>Have questions?</Subtitle>
            </Row>
            <Row justify='center'>
              <ButtonWrapper>
                <ButtonPrimary>CONTACT US</ButtonPrimary>
              </ButtonWrapper>
            </Row>
          </RowWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Faq