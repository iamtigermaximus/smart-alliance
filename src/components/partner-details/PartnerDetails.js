import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import {
  PartnerDetailsContainer,
  PartnerName,
  PartnerCompany,
  InfoCardContainer,
  InfoCard,
  CardContainer,
  CompanyName,
  Info,
} from './PartnerDetails.styles'
import { BlankForImage, CardBodyContainer } from '../card/Card.styles'
import Avatar from 'react-avatar'

const PartnerDetails = () => {
  const params = useParams()
  const [partner, setPartner] = useState()

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => setPartner(response.data))
      .catch((error) => console.log(error))
  }, [params.id])
  console.log('partner!!!!', params)
  return (
    <>
      {partner && (
        <PartnerDetailsContainer>
          <CardContainer key={partner.id}>
            <BlankForImage>
              <Avatar
                name={partner.name}
                maxInitials={1}
                size='200'
                textSizeRatio={4}
                round='100px'
              />
            </BlankForImage>
            <CardBodyContainer>
              <PartnerName>{partner.name}</PartnerName>
              <PartnerCompany>{partner.email}</PartnerCompany>
            </CardBodyContainer>
          </CardContainer>
          <InfoCardContainer>
            <InfoCard>
              <CompanyName>{partner.company.name}</CompanyName>
              <Info>{partner.address.suite}</Info>
              <Info>{partner.address.street}</Info>
              <Info>{partner.address.zipcode}</Info>
              <Info>{partner.address.city}</Info>
              <Info>Call: {partner.phone}</Info>
              <Info>
                Visit:
                <a href='https://github.com/iamtigermaximus/smart-alliance'>
                  {partner.website}
                </a>
              </Info>
            </InfoCard>
          </InfoCardContainer>
        </PartnerDetailsContainer>
      )}
    </>
  )
}

export default PartnerDetails
