import React from 'react'

const ServiceCard = ({ heading, image, description }) => {
  return (
    <div className="service-card">
      <img src={image} />
      <div className="text-card-sec">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard