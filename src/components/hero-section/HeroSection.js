import React from 'react'
import Space from '../../assets/videos/video-2.mp4'
import { Video, HeroContainer } from './HeroSection.styles'

const HeroSection = () => {
  return (
    <HeroContainer>
      <Video autoPlay loop muted src={Space} type='video/mp4' />
    </HeroContainer>
  )
}

export default HeroSection
