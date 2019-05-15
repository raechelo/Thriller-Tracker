import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleFavoriteMovie } from '../../actions';
import { deleteFavorite } from '../../thunks/deleteFavorite';
import { addFavorite } from '../../thunks/addFavorite';

class CardDetails extends Component {

  handleFavoriteClick = () => {
    const user_id = this.props.user.id
    if (!user_id) {
      return alert('Login or Signup to favorite movies')
    }
    const { id, favorited } = this.props;
    const movie = this.props;
    
    this.props.toggleFavoriteMovie(id);
    if (favorited) {
      this.props.deleteFavorite(id, user_id);
    } else {
      this.props.addFavorite(movie, user_id);
    }
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
        <Link to='/'>
          <button className="back-btn">
            <i className="fas fa-angle-left"></i> Back to results
          </button>
        </Link>
      </section>
    )
  }
}

CardDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string, 
  vote_average: PropTypes.number,
  overview: PropTypes.string, 
  posterImage: PropTypes.string, 
  release_date: PropTypes.string, 
  favorited: PropTypes.bool
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteMovie: (id) => dispatch(toggleFavoriteMovie(id)),
  addFavorite: (movie, user_id) => dispatch(addFavorite(movie, user_id)),
  deleteFavorite: (movie_id, user_id) => dispatch(deleteFavorite(movie_id, user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);