import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      const {title, vote_average, overview, posterImage, release_date, favorited} = this.props
      const heartClasses = favorited ? 'fas fa-heart fa-2x favorited' : 'fas fa-heart fa-2x';

      return (
        <section className="Card-Details" >
          <h2>{title}</h2>
          <i onClick={this.handleFavoriteClick} className={heartClasses}></i>
          <h5>Released<span>{release_date.slice(0, 4)}</span></h5>
          <h6>{vote_average}/10<i className="far fa-star"></i></h6>
          <p>{overview}</p>
          <img src={posterImage} alt={title + ' poster'} />
          <button onClick={this.handleClick} className="back-btn"><i className="fas fa-angle-left"></i> Back to results</button>
          {this.state.redirected && <Redirect to='/' />}
        </section>
      )
  }
}

CardDetails.propTypes = {
  m: PropTypes.object
}

export default CardDetails;