import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
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
    const expandedCard = <article>
      <h2>{this.props.title}</h2>
      <h4>{this.props.rating}</h4>
      <p>{this.props.m.synopsis}</p>
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