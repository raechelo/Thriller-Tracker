import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavoriteMovie } from '../../actions';
import { deleteFavorite } from '../../thunks/deleteFavorite';
import { addFavorite } from '../../thunks/addFavorite';

export class Card extends Component {

  handleFavoriteClick = () => {
    const user_id = this.props.user.id
    if (!user_id) return;
    const { id, favorited } = this.props.m;
    const movie = this.props.m;
    
    if (favorited) {
      this.props.toggleFavoriteMovie(id);
      this.props.deleteFavorite(id, user_id);
    } else {
      this.props.toggleFavoriteMovie(id);
      this.props.addFavorite(movie, user_id);
    }
  }

  render() {
    const { id, title, posterImage, favorited } = this.props.m;
    const heartClasses = favorited ? 'fas fa-heart fa-2x contracted favorited' : 'fas fa-heart fa-2x';

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