import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`

export const HeroContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  justify-content: center;
  padding: 30px;

  @media (min-width: ${bp.md}) {
    height: 100vh;
    padding: 100px;
  }
`
export const Hero = styled.div`
  height: 250px;
  width: 100%;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  justify-content: center;
  background-color: ${colors.navy};
  border-radius: 5px;
  opacity: 0.6;
  z-index: -1;

  @media (min-width: ${bp.md}) {
    height: 400px;
    width: 100%;
  }
`
export const HeroTitle = styled.h1`
  color: ${colors.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  z-index: 1;

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 60px;
    margin: 50px;
  }
`
export const HeroButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  z-index: 1;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`
