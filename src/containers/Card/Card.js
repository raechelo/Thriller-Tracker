import React, { Component } from 'react';
import { connect } from 'react-redux';
import star from '../../media/images/star-solid.svg';

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
    const expandedCard = <article onClick={this.handleClick}>
    <div className="movie-info">
      <h2>{this.props.m.title}</h2>
      <h6>{this.props.m.rating}</h6>
      <button><i class="fas fa-heart"></i></button>
      <p>{this.props.m.synopsis}</p>
    </div>
      <img src={this.props.m.posterImage} alt={this.props.m.title + ' poster'} />
      </article>

    const contractedCard = <img src={this.props.m.posterImage} onClick={this.handleClick} alt={this.props.m.title + ' poster'} />

    return(
      <div className="Card">
        {!this.state.expanded && <i class="fas fa-heart fa-2x contracted"></i>}
        { this.state.expanded ? expandedCard : contractedCard }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Card);