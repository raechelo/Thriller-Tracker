import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteMovie } from '../../actions';
import CardDetails from '../CardDetails/CardDetails';

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
    const heartClasses = favorited ? 'fas fa-heart fa-2x contracted favorited' : 'fas fa-heart fa-2x contracted';

    return(
      <div className="Card">
        {!this.state.expanded && <i onClick={() => this.props.toggleFavoriteMovie(id)} className={heartClasses}></i>}
        <img src={posterImage} alt={title + ' poster'} />
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteMovie: (id) => dispatch(toggleFavoriteMovie(id))
})

export default connect(null, mapDispatchToProps)(Card);