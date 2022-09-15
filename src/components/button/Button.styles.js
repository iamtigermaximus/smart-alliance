import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
// import colors from '../../utils/colors'

export const PrimaryButton = styled.button`
  width: 150px;
  padding: 5px 15px;
  margin: 5px;
  font-weight: 700;
  border-radius: 5px;
  background-color: orange;

  @media (min-width: ${bp.md}) {
    padding: 15px;
    width: 200px;
    font-size: 16px;
  }
`
export const CardButton = styled.button`
  width: 100px;
  padding: 5px 15px;
  margin: 5px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  background-color: orange;

  @media (min-width: ${bp.md}) {
    padding: 5px;
    width: 150px;
    font-size: 16px;
  }
`
