import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { PartnerDetailsContainer, Name } from './PartnerDetails.styles'

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
    <>
      <PartnerDetailsContainer>
        <Name>{partnerDetails.name}</Name>
      </PartnerDetailsContainer>
    </>
  )
}

export default PartnerDetails
