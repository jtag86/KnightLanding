import React from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/devices'
import { ButtonInfo, ButtonPrimary, Column, Container, Heading, Lead, Row, Section, TextMuted, Title } from '../../styles/globalStyles'

const Wrapper = styled.div`
  text-align: center !important;
`

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

const CardWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

const Card = styled.div`
  margin-top: 15px;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
  padding: 2.25rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #263238;
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.3rem;
`



const PricingList = styled.div`
  margin-bottom: 3rem;
  margin-top: 2rem;
`

const PricingItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.05rem;
  font-weight: 500;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Left = styled.div`
  max-width: 33.333%;
  flex-basis: 33.333%;
  text-align: left;
  @media ${device.mobileL} {
    max-width: 100%;
    flex-basis: 100%;
    text-align: center;
  }
`

const Right = styled.div`
  max-width: 66%;
  flex-basis: 66%;
  @media ${device.mobileL} {
    max-width: 100%;
    flex-basis: 100%;
  } 
`

const FeaturesList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  list-style: none; 
  margin-left: 150px;
  @media ${device.mobileL} {
    margin-left: 0px;

  } 
`
const FeaturesItem = styled.li`
  text-align: left;
  float: left;
  width: 50%;
  margin-top: 0;
  margin-bottom: 1.75rem;
  font-size: 1.05rem;
  padding-left: 1.75rem;
  font-weight: 500;
  ::before{
    position: absolute;
    margin-top: 5px;
    margin-left: -25px;
    display: inline-block;
    content: "";
    border: 3px solid #1de9b6;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  @media ${device.mobileL} {
    text-align: center;
  } 
`

const CreateWrapper = styled.div`
  padding-top: 3rem;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: #263238;
    background: linear-gradient(to right, rgba(29, 233, 182, 0.1) 0, #263238 50%, rgba(29, 233, 182, 0.1) 100%);
  }
`

const TextWrapper = styled.div`
  margin: 30px;
`

const Pricing = () => {
  return (
    <StyledSection>
      <Container>
        <Wrapper>
          <Column>
            <Heading>Choose your pricing plan.</Heading>
            <Lead>Simply pricing - 7 Days free trial</Lead>
          </Column>
          <CardWrapper>
            <Row wrap='wrap' justify='space-around'>
                <Card>
                  <Title>Personal</Title>
                  <Heading color='#1de9b6'>$59</Heading>
                  <TextMuted>per month</TextMuted>
                  <PricingList>
                    <PricingItem>1 user</PricingItem>
                    <PricingItem>10 websites</PricingItem>
                    <PricingItem>Access to premium templates</PricingItem>
                    <PricingItem>Basic support</PricingItem>
                  </PricingList>
                  <ButtonWrapper>
                    <ButtonPrimary>Start free trial</ButtonPrimary>
                  </ButtonWrapper>
                </Card>
                <Card>
                  <Title>Agency</Title>
                  <Heading color='#1de9b6'>$159</Heading>
                  <TextMuted>per month</TextMuted>
                  <PricingList>
                    <PricingItem>2-15 user</PricingItem>
                    <PricingItem>50 websites</PricingItem>
                    <PricingItem>Access to premium templates</PricingItem>
                    <PricingItem>Priority support</PricingItem>
                  </PricingList>
                  <ButtonWrapper>
                    <ButtonInfo>Start free trial</ButtonInfo>
                  </ButtonWrapper>
                </Card>
                <Card>
                  <Title>Personal</Title>
                  <Heading color='#1de9b6'>$59</Heading>
                  <TextMuted>per month</TextMuted>
                  <PricingList>
                    <PricingItem>1 user</PricingItem>
                    <PricingItem>10 websites</PricingItem>
                    <PricingItem>Access to premium templates</PricingItem>
                    <PricingItem>Basic support</PricingItem>
                  </PricingList>
                  <ButtonWrapper>
                    <ButtonPrimary>Start free trial</ButtonPrimary>
                  </ButtonWrapper>
                </Card>
            </Row>
          </CardWrapper>
          <Row wrap="wrap">
            <Left>
              <Title>Everything is covered.</Title>
              <Lead>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a,
                      vestibulum nibh.
              </Lead>
            </Left>
            <Right>

            <FeaturesList>
              <FeaturesItem>Weekly new templates</FeaturesItem>
              <FeaturesItem>Access to new features</FeaturesItem>
              <FeaturesItem>MailChimp integration</FeaturesItem>
              <FeaturesItem>Stripe integration</FeaturesItem>
              <FeaturesItem>100 refund guarantee</FeaturesItem>
              <FeaturesItem>Advance SEO tools</FeaturesItem>
              <FeaturesItem>Free unlimited support</FeaturesItem>
              <FeaturesItem>100 refund guarantee</FeaturesItem>
            </FeaturesList>
            </Right>
          </Row>
          <Row justify='center'>
            <CreateWrapper>
              <Title>Try Knight free for 7 days</Title>
              <TextWrapper>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                      tempus odio a, vestibulum nibh.
                </p>
              </TextWrapper>
              <ButtonWrapper>
                <ButtonPrimary>Create your account</ButtonPrimary>
              </ButtonWrapper>
            </CreateWrapper>
          </Row>
        </Wrapper>
      </Container>
    </StyledSection>
  )
}

export default Pricing