import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CardDetails extends Component {
  constructor() {
    super()
    this.state = {
      redirected: false
    }
  }

  handleClick = () => {
    this.setState({ redirected: !this.state.redirected})
  }


    render () {
      const {title, rating, synopsis, posterImage, releaseDate, favorited} = this.props
    const heartClasses = favorited ? 'fas fa-heart fa-2x favorited' : 'fas fa-heart fa-2x';

      return (
        <section className="Card-Details" >
          <h2>{title}</h2>
          <i onClick={this.handleFavoriteClick} className={heartClasses}></i>
          <h5>Released<span>{releaseDate.slice(0, 4)}</span></h5>
          <h6>{rating}/10<i class="far fa-star"></i></h6>
          <p>{synopsis}</p>
          <img src={posterImage} alt={title + ' poster'} />
          <button onClick={this.handleClick} className="back-btn"><i class="fas fa-angle-left"></i> Back to results</button>
          {this.state.redirected && <Redirect to='/' />}
        </section>
      )
  }
}

export default CardDetails;