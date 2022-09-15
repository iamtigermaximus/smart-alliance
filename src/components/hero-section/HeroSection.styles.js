import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
`
