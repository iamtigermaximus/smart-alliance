import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 10px;
`

export const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
export const BrandLinkItem = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;
  font-size: 15px;

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
  }
`

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    display: none;
  }
`

export const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px ;

 > a {
  text-decoration: none;
 }

`
export const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px 20px;
  font-size: 20px;
`
export const SignUpLinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px 20px;
  font-size: 20px;
  border: 1px solid white;
`
export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  > a {
    text-decoration: none;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`

export const MobileMenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 8vh;
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
  z-index: 1;

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`
