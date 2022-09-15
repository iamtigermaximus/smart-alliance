import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  NavbarContainer,
  BrandContainer,
  LinkItemContainer,
  LinkItem,
  SignUpLinkItem,
  BrandLinkItem,
  MenuContainer,
  NavbarLinks,
  BurgerMenu,
  MobileMenuContainer,
  MobileNavbarLinks,
} from './Navbar.styles'

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to='/'>
          <BrandLinkItem>GOLDEN BIZ ALLIANCE</BrandLinkItem>
        </Link>
      </BrandContainer>
      <MenuContainer>
        <NavbarLinks>
          <LinkItemContainer>
            <Link to='/'>
              <LinkItem>HOME</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/about'>
              <LinkItem>ABOUT</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/signup'>
              <SignUpLinkItem>SIGN UP</SignUpLinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <LinkItemContainer>
                <Link to='/'>
                  <LinkItem>HOME</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/about'>
                  <LinkItem>ABOUT</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/signup'>
                  <SignUpLinkItem>SIGN UP</SignUpLinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
