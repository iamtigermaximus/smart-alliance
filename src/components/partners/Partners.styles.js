import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #110934;
`

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

export const HeadingContainer = styled.div``

export const HeadingTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  color: ${colors.offWhite};

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  //width: 100%;
  padding: 20px;

  @media (min-width: ${bp.sm}) {
    padding: 20px 0;
  }
`

export const PartnerCard = styled.div`
  height: 350px;
  width: 100%;
  background-color: #fffafa;
  border-radius: 5px;
  flex-direction: column;
  padding: 3px;
  margin: 20px;
  color: ${colors.navy};

  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    margin: 10px;
  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
    height: 420px;
  }
`
export const BlankForImage = styled.div`
  height: 220px;
  width: 100%;
  background-color: orange;

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
  font-size: 20px;
  font-weight: 700;
  padding: 3px;
`
export const PartnerCompany = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding: 3px;
`
