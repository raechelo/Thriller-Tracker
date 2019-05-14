import React from 'react'

const CardDetails = ({title, rating, synopsis, posterImage}) => {
  return (
    <section className="Card-Details">
      <h2>{title}</h2>
      <h6>{rating}</h6>
      <p>{synopsis}</p>
      <img src={posterImage} alt={title + ' poster'} />
    </section>
  )
}

export default CardDetails;