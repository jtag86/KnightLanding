import React from 'react'
import styled from 'styled-components/macro'
import { Container, MainHeading, Section, Lead, ButtonPrimary, Row, Column } from '../../styles/globalStyles'
import { FaArrowRight } from "react-icons/fa"
import { device } from '../../styles/devices'

const Wrapper = styled.div`
  height: 70vh;
  text-align: center !important;
  display: flex;
`

const HeadingWrapper = styled.div`
  text-align: center !important;
  max-width: 66.66667%;
  margin: 20vh auto;
  @media ${device.mobileL} {
    max-width: 100%;
  }
`

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin: 10px;
`

const Home = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <HeadingWrapper>
            <MainHeading>Quickly build landing pages with Knight</MainHeading>
            <Lead>Knight is a platform that helps freelancers and companies build beautiful landing</Lead>
            <StyledButtonPrimary>
              <Row align="center">
                Get started now&nbsp;
                <FaArrowRight />
              </Row>
            </StyledButtonPrimary>
          </HeadingWrapper>
        </Wrapper>
      </Container>
    </Section>

  )
}

export default Home