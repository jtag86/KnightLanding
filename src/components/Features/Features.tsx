import React from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/devices'
import { FaPencilAlt, FaBtc, FaAmazon, FaGoogle } from "react-icons/fa";
import { ButtonLight, Column, Container, Heading, Lead, MainHeading, Row, Section, Subtitle } from '../../styles/globalStyles'
import Carousel from 'nuka-carousel'
import image1 from '../../assets/img/blog-1.jpg'
import image2 from '../../assets/img/blog-2.jpg'
import image3 from '../../assets/img/blog-3.jpg'

const Wrapper = styled.div`
  text-align: center !important;
`

const Box = styled(Column)`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 3rem;
  @media ${device.mobileL} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`



const IconBox = styled.div`
  position: relative;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 1rem;
  background-color: rgba(29, 233, 182, 0.1);
  width: 83px;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MutedText =styled.p`
  color: #78909C !important;
`

const LeftBox = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  text-align: left;
  @media ${device.tablet} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const RightBox = styled.div`

  flex: 0 0 41.66667%;
  max-width: 41.66667%;
  position: relative;
  @media ${device.tablet} {
    margin-top: 30px;
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
`

const SliderControlBottomCenter = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 50px;
`
const SliderControlBottomCenterUl = styled.ul`
  position: relative;
  top: 100px;
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  
`
const SliderControlBottomCenterLi = styled.li`
  margin-left: 10px;
`

const SliderControlBottomCenterButton = styled.div<{currentSlide: number, num: number}>`
  cursor: pointer;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  background-color: ${props => props.currentSlide === props.num ? "#1de9b6" : "white"};
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
`



const Features = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Row justify='center'>
            <Column>
              <MainHeading>Knight offers everything you need.</MainHeading>
              <Lead>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisicommodo, tempus odio a, vestibulum nibh.</Lead>
            </Column>
          </Row>
          <Row wrap="wrap" margin='20px'>
            <Box align="center">
              <IconBox>
                <FaPencilAlt fontSize={30}  color="#1de9b6" />
              </IconBox>
              <Subtitle>Create once. Share everywhere.</Subtitle>
              <MutedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum innisi commodo, tempus odio a, vestibulum nibh.</MutedText>
            </Box>
            <Box align="center">
              <IconBox>
                <FaBtc fontSize={30}  color="#1de9b6" />
              </IconBox>
              <Subtitle>Unlimited devices.</Subtitle>
              <MutedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum innisi commodo, tempus odio a, vestibulum nibh.</MutedText>
            </Box>
            <Box align="center">
              <IconBox>
                <FaAmazon fontSize={30}  color="red" />
              </IconBox>
              <Subtitle>Unlimited devices.</Subtitle>
              <MutedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum innisi commodo, tempus odio a, vestibulum nibh.</MutedText>
            </Box>
            <Box align="center">
              <IconBox>
                <FaGoogle fontSize={30}  color="#1de9b6" />
              </IconBox>
              <Subtitle>Unlimited devices.</Subtitle>
              <MutedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum innisi commodo, tempus odio a, vestibulum nibh.</MutedText>
            </Box>
          </Row>
          <Row justify="space-between" wrap='wrap'>
            <LeftBox>
              <Heading>Knight is more than just a page builder.</Heading>
              <Lead>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi
                    commodo, tempus odio a, vestibulum nibh.
              </Lead>
              <ButtonLight>Try the live demo</ButtonLight>
            </LeftBox>
            <RightBox>
              <Carousel
                wrapAround={true}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => 
                  <SliderControlBottomCenter>
                    <SliderControlBottomCenterUl>
                      {[...Array(slideCount)].map((e, key) => 
                        <SliderControlBottomCenterLi   key={key}>
                          <SliderControlBottomCenterButton currentSlide={currentSlide} num={key} onClick={() => goToSlide(key)}/>
                        </SliderControlBottomCenterLi>
                      )}
                    </SliderControlBottomCenterUl>
                  </SliderControlBottomCenter>
                }
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
              >
                <ImageWrapper>
                  <Image src={image1} />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src={image2} />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src={image3} />
                </ImageWrapper>
              </Carousel>
            </RightBox>
          </Row>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Features