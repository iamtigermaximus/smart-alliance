import React from 'react'
import {
  CardContainer,
  BlankForImage,
  CardBodyContainer,
  PartnerName,
  PartnerCompany,
  PartnerInfoLink,
} from './Card.styles'
import { CardButton } from '../button/Button.styles'
import Avatar from 'react-avatar'

const Card = ({
  id,
  name,
  email,
  addressStreet,
  addressSuite,
  addressCity,
  companyName,
  companyWebsite,
  companyPhone,
}) => {
  return (
    <>
      <PartnerInfoLink to={`/partner-info/${id}`}>
        <CardContainer key={id}>
          <BlankForImage>
            <Avatar
              name={name}
              maxInitials={1}
              size='200'
              textSizeRatio={4}
              round='100px'
            />
          </BlankForImage>
          <CardBodyContainer>
            <PartnerName>{name}</PartnerName>
            <PartnerCompany>{companyName}</PartnerCompany>
            <CardButton>More info</CardButton>
          </CardBodyContainer>
        </CardContainer>
      </PartnerInfoLink>
    </>
  )
}

export default Card
