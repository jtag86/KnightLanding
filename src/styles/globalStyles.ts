import styled, { createGlobalStyle } from 'styled-components'
import { device } from './devices'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    font-size: 1.1rem;
    font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI";
    font-weight: 400;
    line-height: 1.5;
    color: #CFD8DC;
  }

  h6 {
    margin-bottom: 1rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.5;
    color: #ffffff;
    font-size: 1rem;
  }

`

export const Row = styled.div<{
    justify?: string,
    align?: string,
    gap?: string,
    padding?: string,
    margin?: string,
    position?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    maxHeight?: string,
    minHeight?: string,
    wrap?: string,
  }>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div<{
  justify?: string,
  align?: string,
  gap?: string,
  padding?: string,
  margin?: string,
  position?: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string,
  height?: string,
  maxHeight?: string,
  minHeight?: string,
}>`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  
  @media screen and (max-width: 960px){
    padding: 0 30px;
  }

  @media ${device.laptop} {
    max-width: 992px;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    max-width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 576px;
    justify-content: center;
  }

  @media ${device.mobileS} {
    max-width: 455px;
  }
`

export const Section = styled.section`
  padding: 100px 0;
`

export const MainHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;
  color: #ffffff;
`

export const Heading = styled.h2<{color?: string}>`
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ color }) => (color ? color : '#FFF')};
  font-size: 2.5rem;
`

export const Title = styled.h3<{color?: string}>`
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ color }) => (color ? color : '#FFF')};
`

export const Subtitle = styled.h5`
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;
  color: #ffffff;
  font-size: 1.25rem;
`


export const Lead = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
`

export const TextMuted = styled.div`
  color: #78909C;
  font-weight: 600;
  margin-top: 0.5rem !important;
`

export const Button = styled.a`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 2px solid transparent;
  padding: 0.55rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  transition: all 0.2s;
  box-shadow: 0 8px 16px rgb(0 229 255 / 30%);
  transition: all .2s ease-out;
  text-transform: uppercase;
  text-decoration: none;
  width: 250px;
  
`

export const ButtonPrimary = styled(Button)`
  color: #11171a;
  background-color: #1de9b6;
  border-color: #1de9b6;
  :hover {
    color: #fff;
  }
`

export const ButtonInfo = styled(Button)`
  color: #11171a;
  background-color: #00e5ff;
  border-color: #00e5ff;
  :hover {
    color: #fff;
  }
`

export const ButtonLight = styled(Button)`
  color: #11171a;
  background-color: #ECEFF1;
  border-color: #ECEFF1;
  :hover {
    background-color: #ccc;
    border-color: #ccc;
  }
`



export default GlobalStyle