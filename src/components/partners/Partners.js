import React, { useEffect, useState } from 'react'
import {
  Container,
  HeadingContainer,
  HeadingTitle,
  CardsWrapper,
} from './Partners.styles'
import Card from '../card/Card'
import axios from 'axios'

const Partners = () => {
  const [partners, setPartners] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setPartners(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(partners)

  return (
    <Container>
      <HeadingContainer>
        <HeadingTitle>Meet our partners</HeadingTitle>
      </HeadingContainer>
      <CardsWrapper>
        {partners.map((partner) => (
          <Card
            id={partner.id}
            name={partner.name}
            email={partner.email}
            addressStreet={partner.address.street}
            addressSuite={partner.address.suite}
            addressCity={partner.address.city}
            addressZipcode={partner.address.zipcode}
            companyName={partner.company.name}
            companyWebsite={partner.website}
            companyPhone={partner.phone}
          />
        ))}
      </CardsWrapper>
    </Container>
  )
}

export default Partners
