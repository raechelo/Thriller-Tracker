import React, { Component } from 'react';
import { connect } from 'react-redux';
import star from '../../media/images/star-solid.svg';
import { toggleFavoriteMovie } from '../../actions';

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

  render() {
    const { title, rating, synopsis, posterImage, id, favorited } = this.props.m;
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
    const contractedCard = <img src={posterImage} onClick={this.handleClick} alt={title + ' poster'} />

    return(
      <div className="Card">
        {!this.state.expanded && <i onClick={() => this.props.toggleFavoriteMovie(id)} className={heartClasses}></i>}
        { this.state.expanded ? expandedCard : contractedCard }
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteMovie: (id) => dispatch(toggleFavoriteMovie(id))
})

export default connect(null, mapDispatchToProps)(Card);