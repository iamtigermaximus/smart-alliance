import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {
  PartnerDetailsContainer,
  PartnerName,
  PartnerCompany,
  InfoCardContainer,
  CardContainer,
} from './PartnerDetails.styles'
import { BlankForImage, CardBodyContainer } from '../card/Card.styles'
import Avatar from 'react-avatar'

const PartnerDetails = () => {
  const { id } = useParams()
  const [partnerDetails, setPartnerDetails] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setPartnerDetails(response.data))
      .catch((error) => console.log(error))
  }, [id])
  console.log('partner!!!!', partnerDetails)
  return (
    <PartnerDetailsContainer key={id}>
      <CardContainer>
        <BlankForImage>
          <Avatar
            name={partnerDetails.name}
            maxInitials={1}
            size='200'
            textSizeRatio={4}
            round='100px'
          />
        </BlankForImage>
        <CardBodyContainer>
          <PartnerName>{partnerDetails.name}</PartnerName>
          <PartnerCompany>{partnerDetails.email}</PartnerCompany>
        </CardBodyContainer>
      </CardContainer>
      <InfoCardContainer>
        <h1>Hello</h1>
      </InfoCardContainer>
    </PartnerDetailsContainer>
  )
}

export default PartnerDetails
