import React from 'react'

const CardDetails = ({title, rating, synopsis, posterImage, date, bgImage}) => {
  return (
    <section className="Card-Details" >
      <h2>{title}</h2>
      <h5>{date}</h5>
      <h6>{rating}</h6>
      <p>{synopsis}</p>
      <img src={posterImage} alt={title + ' poster'} />
    </section>
  )
}

export default CardDetails;

// would be cool to add the background image as the background for the card as some added info for each movie
