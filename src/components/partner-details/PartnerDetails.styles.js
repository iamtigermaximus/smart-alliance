import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const PartnerDetailsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  padding: 100px;
  background: rgb(2, 1, 41);
  background: linear-gradient(
    90deg,
    rgba(2, 1, 41, 1) 0%,
    rgba(2, 1, 41, 1) 6%,
    rgba(120, 120, 171, 1) 100%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  @media (min-width: ${bp.md}) {
    flex-direction: row;
    justify-content: center;
  }
`
export const CardContainer = styled.div`
  height: 350px;
  width: 300px;
  background-color: #fffafa;
  border-radius: 5px;
  flex-direction: column;
  padding: 3px;
  margin: 20px;
  color: ${colors.navy};
  justify-content: center;
  align-items: center;

  &&:hover {
    border: 2px solid orange;
  }

  @media (min-width: ${bp.sm}) {
    width: 350px;
    margin: 10px;
  }

  @media (min-width: ${bp.md}) {
    height: 450px;
  }
`
export const BlankForImage = styled.div`
  height: 220px;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${bp.lg}) {
    height: 300px;
  }
`

export const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`
export const PartnerName = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`
export const PartnerCompany = styled.h1`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
`

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-color: center;
  align-items: center;
  height: 350px;
  width: 300px;
  background-color: #fffafa;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    width: 350px;
    margin: 10px;
  }

  @media (min-width: ${bp.md}) {
    height: 450px;
  }
`
