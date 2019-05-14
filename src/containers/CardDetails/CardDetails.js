import React from 'react';

const CardDetails = ({title, rating, synopsis, posterImage, date, bgImage}) => {
  return (
    <section className="Card-Details" >
      <h2>{title}</h2>
      <h5>Released<span>{date.slice(0, 4)}</span></h5>
      <h6>Rated<span>{rating}/10</span></h6>
      <p>{synopsis}</p>
      <img src={posterImage} alt={title + ' poster'} />
    </section>
  )
}

export default CardDetails;
