import React from 'react'
import Space from '../../assets/videos/video-2.mp4'
import {
  Video,
  HeroContainer,
  HeroTitle,
  Hero,
  HeroButtonContainer,
} from './HeroSection.styles'
import { PrimaryButton } from '../button/Button.styles'

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <Video autoPlay loop muted src={Space} type='video/mp4' />
        <Hero>
          <HeroTitle>
            Be smart, be online!We can help you build your digital face
          </HeroTitle>
          <HeroButtonContainer>
            <PrimaryButton>See our work</PrimaryButton>
            <PrimaryButton>Let's talk</PrimaryButton>
          </HeroButtonContainer>
        </Hero>
      </HeroContainer>
    </>
  )
}

export default HeroSection
