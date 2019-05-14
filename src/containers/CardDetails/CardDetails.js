import React from 'react'

const CardDetails = ({title, vote_average, overview, posterImage}) => {
  return (
    <section className="Card-Details">
      <h2>{title}</h2>
      <h6>{vote_average}</h6>
      <p>{overview}</p>
      <img src={posterImage} alt={title + ' poster'} />
    </section>
  )
}

export default CardDetails;