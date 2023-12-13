// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: white;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 12px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const SpecificDirection = styled.p`
  color: white;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
