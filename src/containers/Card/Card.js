import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteMovie } from '../../actions';
<<<<<<< HEAD
import { deleteFavorite } from '../../thunks/deleteFavorite';
import { addFavorite } from '../../thunks/addFavorite';
=======
import CardDetails from '../CardDetails/CardDetails';
>>>>>>> master

export class Card extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  handleClick = () => {
    this.setState( { expanded: !this.state.expanded } )
  }

  handleFavoriteClick = () => {
    const { id, favorited } = this.props.m;
    if (!this.props.user.id) return;
    
    if (favorited) {
      this.props.toggleFavoriteMovie(id);
      this.props.deleteFavorite(this.props.m.id, this.props.user.id);
    } else {
      this.props.toggleFavoriteMovie(id);
      this.props.addFavorite(this.props.m, this.props.user.id);
    }
  }

  render() {
    const { title, rating, synopsis, posterImage, favorited } = this.props.m;
    const expandedCard = 
    <article onClick={this.handleClick}>
      <div className="movie-info">
        <h2>{title}</h2>
        <h6>{rating}</h6>
        <button><i class="fas fa-heart"></i></button>
        <p>{synopsis}</p>
      </div>
      <img src={posterImage} alt={title + ' poster'} />
    </article>
    const heartClasses = favorited ? 'fas fa-heart fa-2x contracted favorited' : 'fas fa-heart fa-2x contracted';

    return(
      <div className="Card">
        {!this.state.expanded && <i onClick={this.handleFavoriteClick} className={heartClasses}></i>}
        <img src={posterImage} alt={title + ' poster'} />
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