import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'

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
export const PartnerInfoLink = styled(Link)`
  text-decoration: none;
`
