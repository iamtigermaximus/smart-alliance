import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  justify-content: center;
  padding: 30px;
  background: rgb(2, 1, 41);
  background: linear-gradient(
    90deg,
    rgba(2, 1, 41, 1) 0%,
    rgba(2, 1, 41, 1) 6%,
    rgba(120, 120, 171, 1) 100%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`
export const Title = styled.h1`
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
