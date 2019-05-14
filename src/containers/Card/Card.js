import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavoriteMovie } from '../../actions';
import { deleteFavorite } from '../../thunks/deleteFavorite';
import { addFavorite } from '../../thunks/addFavorite';

export class Card extends Component {

  handleFavoriteClick = () => {
    const user_id = this.props.user.id
    if (!user_id) {
      return alert('Login or Signup to favorite movies')
    }
    const { id, favorited } = this.props.m;
    const movie = this.props.m;
    
    this.props.toggleFavoriteMovie(id);
    if (favorited) {
      this.props.deleteFavorite(id, user_id);
    } else {
      this.props.addFavorite(movie, user_id);
    }
  }

  render() {
    const { id, title, posterImage, favorited } = this.props.m;
    const heartClasses = favorited ? 'fas fa-heart fa-2x favorited' : 'fas fa-heart fa-2x';

    return(
      <div className="Card">
        <i onClick={this.handleFavoriteClick} className={heartClasses}></i>
        <Link to={`/movies/${id}`} >
          <img src={posterImage} alt={title + ' poster'} />
        </Link>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteMovie: (id) => dispatch(toggleFavoriteMovie(id)),
  addFavorite: (movie, user_id) => dispatch(addFavorite(movie, user_id)),
  deleteFavorite: (movie_id, user_id) => dispatch(deleteFavorite(movie_id, user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);