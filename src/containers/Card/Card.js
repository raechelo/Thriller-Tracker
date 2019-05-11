import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <img src={this.props.m.posterImage} />
      </article>

    const contractedCard = <img src={this.props.m.posterImage} onClick={this.handleClick} />

    return(
      <div className="Card">
        { this.state.expanded ? expandedCard : contractedCard }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Card);